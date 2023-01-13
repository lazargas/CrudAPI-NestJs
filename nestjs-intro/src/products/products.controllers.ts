import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common/decorators";
import { ProductService } from "./Products.service";


@Controller('products')
export class ProductsController {
    
    constructor(private readonly productsService: ProductService){}
    
    
    @Post()
    addProduct(@Body() completeBody: {
        title: string,
        description: string,
        price: number
    }): any {
        const generateId = this.productsService.insertProduct(completeBody.title,completeBody.description,completeBody.price);

        return {id: generateId};

    }

    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }


    @Get(':id')
    getProduct(@Param('id') prodId: string): any {
        const product = this.productsService.getProduct(prodId);
        return product;
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId:string,@Body('title') prodTitle:string,
    @Body('description') prodDescription:string,@Body('price') prodPrice:number){
        const product = this.productsService.updateProduct(prodId,prodTitle,prodDescription,prodPrice);
        return {...product};
    }


    @Delete(':id')
    removeProduct(@Param('id') prodId: string){
        this.productsService.removeProduct(prodId);
        return null;
    }

}