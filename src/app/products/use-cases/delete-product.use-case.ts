import { Inject, Injectable } from '@nestjs/common';
import type { ProductRepositoryPort } from '../../../domain/products/product.repository.port';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    @Inject('ProductRepositoryPort') private readonly repository: ProductRepositoryPort
  ) {}

  async execute(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}