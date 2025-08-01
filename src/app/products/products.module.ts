// src/modules/products/products.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductOrmEntity } from 'src/infrastructure/entities/products/product.orm-entity';
import { ProductController } from 'src/infrastructure/http/products/controller/product.controller';

import { CreateProductUseCase } from './use-cases/create-product.use-case';
import { FindAllProductsUseCase } from './use-cases/find-all-products.use-case';
import { FindOneProductUseCase } from './use-cases/find-one-product.use-case';
import { UpdateProductUseCase } from './use-cases/update-product.use-case';
import { DeleteProductUseCase } from './use-cases/delete-product.use-case';
import { ProductRepository } from 'src/infrastructure/database/products/product.repository';

import { AuthServiceClient } from 'src/security/auth.service'; 
import {  HttpModule as AxiosModule } from '@nestjs/axios'; 
import { AuthGuard } from 'src/security/auth.guard';
@Module({
  imports: [
    TypeOrmModule.forFeature([ProductOrmEntity]),
    AxiosModule, 
  ],
  controllers: [ProductController],
  providers: [
    CreateProductUseCase,
    FindAllProductsUseCase,
    FindOneProductUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
    {
      provide: 'ProductRepositoryPort',
      useClass: ProductRepository,
    },
    AuthServiceClient,
    AuthGuard
  ],
})
export class ProductsModule {}
