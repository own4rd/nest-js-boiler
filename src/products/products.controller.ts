import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";

let products = [
    {
        'id': 1,
        'name': 'Produto 1',
        'description': 'Desc 1'
    },
    {
        'id': 2,
        'name': 'Produto 2',
        'description': 'Desc 2 '
    },
]

const INDEX_PRODUCT_NOT_FOUND = -1

@Controller('produtos')
export class ProductsController {
    
    @Get()
    findAll() {
        return products;
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        const product = products.find((product) => product.id === +id);
        if(!product) {
            throw new NotFoundException('Produto nao existe.')
        }
        return product;
    }

    @Post()
    create(@Body() input) {
        products.push(input)
        return input;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT) // EXAMPLE
    delete(@Param('id') id: number) {
        const productIndex = products.findIndex((product) => product.id === +id);
        if(productIndex === INDEX_PRODUCT_NOT_FOUND) {
            throw new NotFoundException('Produto nao existe.')
        }
        products.splice(productIndex, 1)
    }
}