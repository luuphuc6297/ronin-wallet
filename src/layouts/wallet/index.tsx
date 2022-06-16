import React from 'react';
import { Box } from '@mui/material';

interface WalletLayoutProps {
    children?: React.ReactElement;
}
const WalletLayout = ({ children }: WalletLayoutProps) => {
    return <Box sx={{ flexGrow: 1 }}>{children}</Box>;
};
export default WalletLayout;
