import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
} from '@mui/material';
import { TableBodyContent } from './components/TableBodyContent';
import { TableHeadContent } from './components/TableHeadContent';

export const App = () => {
    return (
        <TableContainer
            component={Paper}
            sx={{ width: 600, margin: 'auto', maxHeight: '500px' }}
        >
            <Table stickyHeader>
                <TableHead>
                    <TableHeadContent />
                </TableHead>
                <TableBody>
                    <TableBodyContent />
                </TableBody>
            </Table>
        </TableContainer>
    );
};
