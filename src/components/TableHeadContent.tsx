import { ShoppingCart } from '@mui/icons-material';
import { Stack, styled, TableCell, TableRow, Typography } from '@mui/material';
import { AddProductButton } from './AddProductButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark[800],
    color: theme.palette.common.white,
    fontWeight: 'bold',
}));

export const TableHeadContent = () => {
    return (
        <>
            <TableRow>
                <StyledTableCell>
                    <Stack
                        direction="row"
                        spacing={1}
                    >
                        <ShoppingCart />
                        <Typography fontWeight={600}>Shopping cart</Typography>
                    </Stack>
                </StyledTableCell>
                <StyledTableCell align="right">
                    <AddProductButton />
                </StyledTableCell>
            </TableRow>
        </>
    );
};
