import { ShoppingCart } from '@mui/icons-material';
import { Stack, styled, TableCell, TableRow, Typography } from '@mui/material';
import { getAllProducts } from '../api/getAllProducts';
import { useQuery } from '../tanstack-query/useQuery';
import { AddProductButton } from './AddProductButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark[800],
    color: theme.palette.common.white,
    fontWeight: 'bold',
}));

export const TableHeadContent = () => {
    const result = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts,
    });

    const products = 'data' in result ? result.data : [];

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
                            {!result.isLoading
                                ? `Shopping cart (${products.length})`
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
