import { Add } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import { api } from '../main';
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
                        await api.addProduct({
                            body: {
                                name: newName,
                            },
                        });
                        onClose();
                    }}
                />
            </Dialog>
        </>
    );
};
