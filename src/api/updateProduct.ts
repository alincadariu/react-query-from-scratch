import { api } from '../main';
import type { Product } from './contract';

export const updateProduct = async (product: Product) => {
    const data = await api.updateProduct({
        body: product,
        params: {
            id: product.id,
        },
    });
    return data.body;
};
