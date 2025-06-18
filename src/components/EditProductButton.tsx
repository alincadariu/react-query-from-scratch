import { Edit } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import type { Product } from '../api/contract';
import { api } from '../main';
import { EditProductDialogContent } from './EditProductDialogContent';

interface EditProductButtonProps {
    product: Product;
}

export const EditProductButton = ({ product }: EditProductButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    return (
        <>
            <IconButton onClick={() => setIsOpen(true)}>
                <Edit />
            </IconButton>
            <Dialog
                open={isOpen}
                onClose={onClose}
            >
                <DialogTitle>Edit</DialogTitle>
                <EditProductDialogContent
                    name={product.name}
                    onSave={async newName => {
                        await api.updateProduct({
                            body: {
                                name: newName,
                            },
                            params: {
                                id: product._id,
                            },
                        });
                        onClose();
                    }}
                />
            </Dialog>
        </>
    );
};
