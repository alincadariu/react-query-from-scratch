import type { Product } from './contract';
import { delay } from './delay';

export const getProduct = (id: string) =>
    delay(1000).then(() => {
        const products = JSON.parse(
            localStorage.getItem('products') || '[]',
        ) as Product[];
        return products.find(p => p.id === id);
    });
