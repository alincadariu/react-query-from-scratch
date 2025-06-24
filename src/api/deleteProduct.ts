import type { Product } from './contract';
import { delay } from './delay';

export const deleteProduct = (id: string) =>
    delay(1000).then(() => {
        const products = JSON.parse(
            localStorage.getItem('products') || '[]',
        ) as Product[];
        const newProducts = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(newProducts));
    });
