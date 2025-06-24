import type { Product } from './contract';
import { delay } from './delay';

export const getAllProducts = () =>
    delay(1000).then(
        () => JSON.parse(localStorage.getItem('products') || '[]') as Product[],
    );
