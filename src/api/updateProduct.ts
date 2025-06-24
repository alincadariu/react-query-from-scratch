import type { Product } from './contract';
import { delay } from './delay';

export const updateProduct = (product: Product) =>
    delay(1000).then(() => {
        const products = JSON.parse(
            localStorage.getItem('products') || '[]',
        ) as Product[];
        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            products[index] = product;
            localStorage.setItem('products', JSON.stringify(products));
        }
    });
