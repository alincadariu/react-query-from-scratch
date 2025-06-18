import { api } from '../main';
import type { Product } from './contract';

export const addProduct = async (product: Product) => {
    const data = await api.addProduct({
        body: {
            name: product.name,
        },
    });
    return data.body;
};
