import { api } from '../main';

export const deleteProduct = async (id: number) => {
    const data = await api.deleteProduct({
        params: {
            id: id.toString(),
        },
    });
    return data.body;
};
