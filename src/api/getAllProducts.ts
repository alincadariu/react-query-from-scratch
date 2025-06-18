import { api } from '../main';
import type { Product } from './contract';

export const getAllProducts = async () => {
    const data = await api.getAllProducts();
    return data.body as Product[];
};
