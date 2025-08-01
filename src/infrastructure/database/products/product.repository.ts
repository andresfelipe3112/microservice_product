import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../../domain/products/product.entity';
import { ProductRepositoryPort } from '../../../domain/products/product.repository.port';
import { ProductOrmEntity } from 'src/infrastructure/entities/products/product.orm-entity';

@Injectable()
export class ProductRepository implements ProductRepositoryPort {
  constructor(
    @InjectRepository(ProductOrmEntity)
    private readonly repo: Repository<ProductOrmEntity>,
  ) {}

  async create(product: Product): Promise<Product> {
    const entity = this.repo.create(product);
    await this.repo.save(entity);
    return product;
  }

  async findAll(filters: {
    name?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
  }): Promise<Product[]> {
    const query = this.repo.createQueryBuilder('product');

    if (filters.name) {
      query.andWhere('LOWER(product.name) LIKE LOWER(:name)', { name: `%${filters.name}%` });
    }

    if (filters.category) {
      query.andWhere(':category = ANY(product.categories)', { category: filters.category });
    }

    if (filters.minPrice !== undefined) {
      query.andWhere('product.salePrice >= :minPrice', { minPrice: filters.minPrice });
    }

    if (filters.maxPrice !== undefined) {
      query.andWhere('product.salePrice <= :maxPrice', { maxPrice: filters.maxPrice });
    }

    const results = await query.getMany();
    return results.map(this.toDomain);
  }

  async findById(id: string): Promise<Product | null> {
    const entity = await this.repo.findOneBy({ id });
    return entity ? this.toDomain(entity) : null;
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    await this.repo.update(id, product);
    const updatedEntity = await this.repo.findOneBy({ id });
    if (!updatedEntity) {
      throw new Error('Product not found after update');
    }
    return this.toDomain(updatedEntity);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  // 🔁 Función privada para mapear ORM -> Entidad de dominio
  private toDomain(entity: ProductOrmEntity): Product {
    return new Product(
      entity.id,
      entity.name,
      entity.brand,
      entity.offer,
      entity.description,
      entity.about,
      entity.quantity,
      entity.rating,
      entity.discount,
      entity.salePrice,
      entity.offerPrice,
      entity.gender,
      entity.categories,
      entity.colors,
      entity.popularity,
      entity.date,
      entity.created,
      entity.isStock,
      entity.isNew,
      entity.image
    );
  }
}
