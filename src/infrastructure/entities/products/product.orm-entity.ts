import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('products')
export class ProductOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'brand', nullable: true })
  brand: string;

  @Column({ name: 'offer', nullable: true })
  offer: string;

  @Column({ name: 'description', type: 'text', nullable: true })
  description: string;

  @Column({ name: 'about', type: 'text', nullable: true })
  about: string;

  @Column({ name: 'quantity', type: 'int', nullable: true })
  quantity: number;

  @Column({ name: 'rating', type: 'decimal', precision: 3, scale: 2, nullable: true })
  rating: number;

  @Column({ name: 'discount', type: 'int', nullable: true })
  discount: number;

  @Column({ name: 'sale_price', type: 'decimal', precision: 10, scale: 2, nullable: true })
  salePrice: number;

  @Column({ name: 'offer_price', type: 'decimal', precision: 10, scale: 2, nullable: true })
  offerPrice: number;

  @Column({ name: 'gender', nullable: true })
  gender: string;

  @Column({ name: 'categories', type: 'text', array: true, nullable: true })
  categories: string[];

  @Column({ name: 'colors', type: 'text', array: true, nullable: true })
  colors: string[];

  @Column({ name: 'popularity', type: 'bigint', nullable: true })
  popularity: number;

  @Column({ name: 'date', type: 'bigint', nullable: true })
  date: number;

  @CreateDateColumn({ name: 'created', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ name: 'is_stock', default: true })
  isStock: boolean;

  @Column({ name: 'new', type: 'int', nullable: true })
  isNew: number;

  @Column({ name: 'image', nullable: true })
  image: string;
}
