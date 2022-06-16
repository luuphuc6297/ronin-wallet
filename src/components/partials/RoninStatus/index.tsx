import CircleIcon from '@mui/icons-material/Circle';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
    width: 126,
    height: 32,
    backgroundColor: '#F7F9FC',
    color: theme.palette.text.primary,
    boxShadow: 'none',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '20px',
    '&:hover': {
        backgroundColor: '#ebedf0',
        boxShadow: 'none',
    },
}));

const StyledCircleIcon = styled(CircleIcon)(({ theme }) => ({
    width: 8,
    height: 8,
    color: theme.palette.primary.main,
    textAlign: 'right',
}));

export const RoninStatus = () => {
    return (
        <StyledButton variant="contained" startIcon={<StyledCircleIcon />}>
            Ronin Wallet
        </StyledButton>
    );
};
