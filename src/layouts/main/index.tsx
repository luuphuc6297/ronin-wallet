import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { MainBackground } from 'assets';
// import AuthProvider from 'libs/AuthProvider';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
    children?: React.ReactElement;
}

const StyledMainLayout = styled(Box)({
    margin: '0 auto',
    backgroundImage: `url(${MainBackground})`,
    backgroundRepeat: 'repeat',
});

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <StyledMainLayout>
            {/* <AuthProvider> */}
                {children}
                <Outlet />
            {/* </AuthProvider> */}
        </StyledMainLayout>
    );
};
export default MainLayout;
