import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { ProductRepositoryPort } from '../../../domain/products/product.repository.port';
import { Product } from '../../../domain/products/product.entity';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    @Inject('ProductRepositoryPort')
    private readonly repository: ProductRepositoryPort
  ) {}

  async execute(id: string, data: Partial<Product>): Promise<Product> {
    const existingProduct = await this.repository.findById(id);
    if (!existingProduct) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    const updatedProduct = { ...existingProduct, ...data };

    return this.repository.update(id, updatedProduct);
  }
}
