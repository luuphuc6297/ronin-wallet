import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createStore, Provider } from 'app/store';
import theme from 'configs/theme';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

const App = () => {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: 0,
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <AnimatePresence exitBeforeEnter initial>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Provider createStore={createStore}>
                        {/* {({ locale }: any) => (
                            <QueryClientProvider client={queryClient}>
                                <IntlProvider messages={locales[locale]} locale={locale}>
                                    <Router />
                                </IntlProvider>
                                {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
                            </QueryClientProvider>
                        )} */}
                        <QueryClientProvider client={queryClient}>
                            <Router />
                            <CssBaseline />
                            <ReactQueryDevtools initialIsOpen={false} />
                        </QueryClientProvider>
                    </Provider>
                </BrowserRouter>
            </ThemeProvider>
        </AnimatePresence>
    );
};

export default App;
