import { styled, TableCell, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import type { Product } from '../api/contract';
import { getAllProducts } from '../api/getAllProducts';
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
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
        };

        fetchProducts();
    }, []);

    return products.map(product => (
        <StyledTableRow key={product._id}>
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
