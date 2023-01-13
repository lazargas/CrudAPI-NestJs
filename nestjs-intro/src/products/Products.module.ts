import { Module } from '@nestjs/common';
import { ProductsController } from './products.controllers';
import { ProductService } from './Products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
