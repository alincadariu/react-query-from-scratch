import { Edit } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import type { Product } from '../api/contract';
import { updateProduct } from '../api/updateProduct';
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
                        await updateProduct({
                            id: product.id,
                            name: newName,
                        });
                        onClose();
                    }}
                />
            </Dialog>
        </>
    );
};
