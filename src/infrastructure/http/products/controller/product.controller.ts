import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards, HttpCode, ParseUUIDPipe, Query } from '@nestjs/common';
import { Product } from 'src/domain/products/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { DeleteProductUseCase } from 'src/app/products/use-cases/delete-product.use-case';
import { UpdateProductUseCase } from 'src/app/products/use-cases/update-product.use-case';
import { FindOneProductUseCase } from 'src/app/products/use-cases/find-one-product.use-case';
import { CreateProductUseCase } from 'src/app/products/use-cases/create-product.use-case';
import { FindAllProductsUseCase } from 'src/app/products/use-cases/find-all-products.use-case';
import { AuthGuard } from 'src/security/auth.guard';


@Controller('products')
 @UseGuards(AuthGuard)
export class ProductController {
  constructor(
    private readonly createProduct: CreateProductUseCase,
    private readonly findAllProducts: FindAllProductsUseCase,
    private readonly findOneProduct: FindOneProductUseCase,
    private readonly updateProduct: UpdateProductUseCase,
    private readonly deleteProduct: DeleteProductUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateProductDto): Promise<Product> {
    return this.createProduct.execute(body);
  }

@Get()
async findAll(
  @Query('name') name?: string,
  @Query('category') category?: string,
  @Query('minPrice') minPrice?: number,
  @Query('maxPrice') maxPrice?: number,
): Promise<Product[]> {
  return this.findAllProducts.execute({ name, category, minPrice, maxPrice });
}


  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Product> {
    return this.findOneProduct.execute(id);
  }

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdateProductDto): Promise<Product> {
    return this.updateProduct.execute(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    await this.deleteProduct.execute(id);
  }
}