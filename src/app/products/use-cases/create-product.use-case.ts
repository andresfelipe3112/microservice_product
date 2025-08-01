import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../../../domain/products/product.entity';
import { v4 as uuidv4 } from 'uuid';
import type { ProductRepositoryPort } from 'src/domain/products/product.repository.port';

@Injectable()
export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepositoryPort') 
    private readonly repository: ProductRepositoryPort
  ) {}

  async execute(data: Omit<Product, 'id'>): Promise<Product> {
    const product = new Product(
      uuidv4(),
      data.name,
      data.brand,
      data.offer,
      data.description,
      data.about,
      data.quantity,
      data.rating,
      data.discount,
      data.salePrice,
      data.offerPrice,
      data.gender,
      data.categories,
      data.colors,
      data.popularity,
      data.date,
      data.created ?? new Date(), // valor por defecto
      data.isStock,
      data.isNew,
      data.image,
    );

    return this.repository.create(product);
  }
}
