import { Add } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import { addProduct } from '../api/addProduct';
import { EditProductDialogContent } from './EditProductDialogContent';

export const AddProductButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    return (
        <>
            <IconButton onClick={() => setIsOpen(true)}>
                <Add />
            </IconButton>
            <Dialog
                open={isOpen}
                onClose={onClose}
            >
                <DialogTitle>Add</DialogTitle>
                <EditProductDialogContent
                    onSave={async newName => {
                        await addProduct({
                            id: crypto.randomUUID(),
                            name: newName,
                        });
                        onClose();
                    }}
                />
            </Dialog>
        </>
    );
};
