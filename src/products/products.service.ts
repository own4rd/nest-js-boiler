import { Injectable, NotFoundException } from "@nestjs/common";

const INDEX_PRODUCT_NOT_FOUND = -1


@Injectable()
export class ProductsService {
    private products = [
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
    ];

    findAll() {
        return this.products;
    }    

    findOne(id: number) {
        const product = this.products.find((product) => product.id === +id);
        if(!product) {
            throw new NotFoundException('Produto nao existe.')
        }
        return product;
    }

    create(input: any) {
        this.products.push(input)
        return input;
    }

    delete(id: number) {
        const productIndex = this.products.findIndex((product) => product.id === +id);
        if(productIndex === INDEX_PRODUCT_NOT_FOUND) {
            throw new NotFoundException('Produto nao existe.')
        }
        this.products.splice(productIndex, 1)
    }
}