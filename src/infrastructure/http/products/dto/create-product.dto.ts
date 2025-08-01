import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsArray,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  brand: string;

  @IsOptional()
  @IsString()
  offer: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  about: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  quantity: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 1 })
  rating: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  discount: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  salePrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  offerPrice: number;

  @IsOptional()
  @IsString()
  gender: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  colors: string[];

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  popularity: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  date: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  created: Date;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isStock: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  isNew: number;

  @IsOptional()
  @IsString()
  image: string;
}
