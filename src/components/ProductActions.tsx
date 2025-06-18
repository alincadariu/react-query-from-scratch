import { Delete } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import type { Product } from '../api/contract';
import { api } from '../main';
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
                    await api.deleteProduct({
                        params: {
                            id: product._id,
                        },
                    });
                }}
                size="small"
            >
                <Delete />
            </IconButton>
        </Stack>
    );
};
