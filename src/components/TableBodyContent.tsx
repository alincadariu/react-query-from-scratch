import { CircularProgress, styled, TableCell, TableRow } from '@mui/material';
import { getAllProducts } from '../api/getAllProducts';
import { useQuery } from '../tanstack-query/useQuery';
import { ProductActions } from './ProductActions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child td': {
        border: 0,
    },
}));

const emojis = ['🍺', '🍒', '🍕'];
const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

export const TableBodyContent = () => {
    const result = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts,
    });

    if (result.isLoading) {
        return (
            <StyledTableRow>
                <StyledTableCell colSpan={2}>
                    <CircularProgress />
                </StyledTableCell>
            </StyledTableRow>
        );
    }

    if (result.state === 'error') {
        return <div>Error: {result.error.message}</div>;
    }

    const products = result.data;

    return products.map(product => (
        <StyledTableRow key={product.id}>
            <StyledTableCell>
                <span style={{ fontSize: '26px', marginRight: '8px' }}>
                    {getRandomEmoji()}
                </span>
                {product.name}
            </StyledTableCell>
            <StyledTableCell>
                <ProductActions product={product} />
            </StyledTableCell>
        </StyledTableRow>
    ));
};
