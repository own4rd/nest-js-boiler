import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";



@Controller('produtos')
export class ProductsController {
    
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    create(@Body() input) {
        return this.productsService.create(input);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT) // EXAMPLE
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }
}