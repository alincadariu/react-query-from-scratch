import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const productSchema = z.object({
    _id: z.string(),
    name: z.string(),
});

export type Product = z.infer<typeof productSchema>;

export const contract = c.router({
    getAllProducts: {
        method: 'GET',
        path: '/products',
        responses: {
            200: z.array(productSchema),
        },
    },
    getProductById: {
        method: 'GET',
        path: '/products/:id',
        responses: {
            200: productSchema,
        },
        pathParams: z.object({
            id: z.string(),
        }),
    },
    addProduct: {
        method: 'POST',
        path: '/products',
        body: z.object({
            name: z.string(),
        }),
        responses: {
            200: productSchema,
        },
    },
    updateProduct: {
        method: 'PUT',
        path: '/products/:id',
        body: z.object({
            name: z.string(),
        }),
        responses: {
            200: productSchema,
        },
        pathParams: z.object({
            id: z.string(),
        }),
    },
    deleteProduct: {
        method: 'DELETE',
        path: '/products/:id',
        responses: {
            200: z.object({
                message: z.string(),
            }),
        },
        pathParams: z.object({
            id: z.string(),
        }),
    },
});
