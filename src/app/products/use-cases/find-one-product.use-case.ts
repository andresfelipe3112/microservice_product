import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ProductRepositoryPort } from '../../../domain/products/product.repository.port';
import { Product } from '../../../domain/products/product.entity';

@Injectable()
export class FindOneProductUseCase {
  constructor(
    @Inject('ProductRepositoryPort') private readonly repository: ProductRepositoryPort
  ) {}

  async execute(id: string): Promise<Product> {
    const product = await this.repository.findById(id);
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    return product;
  }
}