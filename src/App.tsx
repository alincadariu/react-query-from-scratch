import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
} from '@mui/material';
import { useState } from 'react';
import { TableBodyContent } from './components/TableBodyContent';
import { TableHeadContent } from './components/TableHeadContent';
import {
    type CacheEntry,
    QueryClientContext,
} from './tanstack-query/QueryClient';

export const App = () => {
    const [stateId, setStateId] = useState(0);
    const [cache] = useState(() => new Map<string, CacheEntry>());

    return (
        <QueryClientContext.Provider
            value={{
                setStateId,
                cache,
                stateId,
            }}
        >
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
        </QueryClientContext.Provider>
    );
};
