import { Product } from './product.entity'

export interface ProductRepositoryPort {
  create(product: Product): Promise<Product>
  findAll(filters: {
    name?: string
    category?: string
    minPrice?: number
    maxPrice?: number
  }): Promise<Product[]>
  findById(id: string): Promise<Product | null>
  update(id: string, product: Partial<Product>): Promise<Product>
  delete(id: string): Promise<void>
}
