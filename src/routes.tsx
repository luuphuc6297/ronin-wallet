import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

const LoginContainer = React.lazy(() => import('containers/auth/Login'));
const WalletContainer = React.lazy(() => import('containers/wallet'));
const MainLayout = React.lazy(() => import('layouts/main'));
const SendAssetContainer = React.lazy(() => import('containers/transfer/SendAsset'));

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/login',
                    element: (
                        <Suspense>
                            <LoginContainer />
                        </Suspense>
                    ),
                },
                {
                    path: '/wallet',
                    element: (
                        <Suspense>
                            <WalletContainer />
                        </Suspense>
                    ),
                },
                {
                    path: '/send',
                    element: (
                        <Suspense>
                            <SendAssetContainer />
                        </Suspense>
                    ),
                },
            ],
        },
    ]);
};
export default Router;
