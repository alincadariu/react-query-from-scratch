import type { Product } from './contract';
import { delay } from './delay';

export const addProduct = (product: Product) =>
    delay(1000).then(() => {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const newProducts = [
            ...products,
            {
                id: crypto.randomUUID(),
                name: product.name,
            },
        ];
        localStorage.setItem('products', JSON.stringify(newProducts));
    });
