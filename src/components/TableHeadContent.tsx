import { ShoppingCart } from '@mui/icons-material';
import { Stack, styled, TableCell, TableRow, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../api/getAllProducts';
import { AddProductButton } from './AddProductButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark[800],
    color: theme.palette.common.white,
    fontWeight: 'bold',
}));

export const TableHeadContent = () => {
    const [productCount, setProductCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProductCount(products.length);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <TableRow>
                <StyledTableCell>
                    <Stack
                        direction="row"
                        spacing={1}
                    >
                        <ShoppingCart />
                        <Typography fontWeight={600}>
                            {productCount != null
                                ? `Shopping cart (${productCount})`
                                : 'Shopping cart'}
                        </Typography>
                    </Stack>
                </StyledTableCell>
                <StyledTableCell align="right">
                    <AddProductButton />
                </StyledTableCell>
            </TableRow>
        </>
    );
};
