import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { initClient } from '@ts-rest/core';
import { App } from './App.tsx';
import { contract } from './api/contract.ts';
import { assertDefined } from './util/assertDefined.ts';

const getTheme = () =>
    createTheme({
        palette: {
            mode: 'dark',
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontSize: 16,
        },
    });

export const api = initClient(contract, {
    baseUrl: 'https://crudcrud.com/api/fee0e53a863c417d861061081f174636',
});

createRoot(assertDefined(document.getElementById('root'), 'Root')).render(
    <StrictMode>
        <ThemeProvider theme={getTheme()}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>,
);
