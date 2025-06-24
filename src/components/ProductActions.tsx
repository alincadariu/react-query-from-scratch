import { Delete } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import type { Product } from '../api/contract';
import { deleteProduct } from '../api/deleteProduct';
import { EditProductButton } from './EditProductButton';

interface ProductActionsProps {
    product: Product;
}

export const ProductActions = ({ product }: ProductActionsProps) => {
    return (
        <Stack
            direction="row"
            spacing={1}
            justifyContent={'flex-end'}
        >
            <EditProductButton product={product} />
            <IconButton
                onClick={async () => {
                    await deleteProduct(product.id);
                }}
                size="small"
            >
                <Delete />
            </IconButton>
        </Stack>
    );
};
