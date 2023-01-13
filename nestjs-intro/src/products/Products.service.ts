import { Injectable,NotFoundException } from "@nestjs/common";
import { Product } from "./Product.model";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService{
  products: Product[] = [];

  insertProduct(title:string,desc: string,price: number){
    const uuid = uuidv4();
    const newProduct = new Product(uuid,title,desc,price);
    this.products.push(newProduct);
    return uuid;


  }

  getProducts(){
    return [...this.products];
  }

  getProduct(productId:string){
    const product = this.products.find((prod)=> prod.id===productId);
    if(!product){
        throw new NotFoundException();
    }
    return product;
  }

  updateProduct(productId:string,title:string,description:string,price:number){
    const product = this.products.find((prod)=> prod.id===productId);
    if(!product){
        throw new NotFoundException();
    }
    const updatedProduct = {...product};
    if(title){
        updatedProduct.title = title;
    }
    if(description){
        updatedProduct.description = description;
    }
    if(price){
        updatedProduct.price = price;
    }
    return updatedProduct;

  }

  removeProduct(prodId: string){
    const index = this.products.findIndex((prod)=> prod.id===prodId);
    this.products.splice(index,1);
  }
}