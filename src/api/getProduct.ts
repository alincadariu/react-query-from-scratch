import { api } from '../main';

export const getProduct = async (id: number) => {
    const data = await api.getProductById({
        params: {
            id: id.toString(),
        },
    });
    return data.body;
};
