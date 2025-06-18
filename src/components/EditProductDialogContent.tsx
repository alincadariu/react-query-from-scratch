import { Button, DialogActions, DialogContent, TextField } from '@mui/material';
import { useState } from 'react';

interface EditProductDialogContentProps {
    onSave: (name: string) => void;
    name?: string;
}
export const EditProductDialogContent = ({
    onSave,
    name = '',
}: EditProductDialogContentProps) => {
    const [productName, setProductName] = useState(name);

    return (
        <>
            <DialogContent>
                <TextField
                    value={productName}
                    onChange={({ target: { value } }) => setProductName(value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={async () => onSave(productName)}>Save</Button>
            </DialogActions>
        </>
    );
};
