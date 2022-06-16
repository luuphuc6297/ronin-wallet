import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { AccountLogoUrl } from 'assets';
import React from 'react';

const StyledAccountLogoBox = styled(Box)(({ theme }) => ({
    width: 32,
    height: 32,
    backgroundColor: '#F7F9FC',
    borderRadius: 8,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: '#ebedf0',
        boxShadow: 'none',
    },
}));

const StyledAccountLogo = styled('img')(({ theme }) => ({
    color: theme.palette.primary.main,
}));

export const Account = () => {
    return (
        <StyledAccountLogoBox>
            <StyledAccountLogo src={AccountLogoUrl} />
        </StyledAccountLogoBox>
    );
};
