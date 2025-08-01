import { Inject, Injectable } from '@nestjs/common';
import type { ProductRepositoryPort } from 'src/domain/products/product.repository.port';
import { Product } from 'src/domain/products/product.entity';

interface ProductFilter {
  name?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

@Injectable()
export class FindAllProductsUseCase {
  constructor(
    @Inject('ProductRepositoryPort') private readonly repository: ProductRepositoryPort
  ) {}

  async execute(filters: ProductFilter = {}): Promise<Product[]> {
    return this.repository.findAll(filters);
  }
}
