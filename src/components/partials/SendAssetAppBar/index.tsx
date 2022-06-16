import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeftIcon } from 'assets';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StyledBoxAppBar = styled(Box)(({ theme }) => ({
    '& .MuiPaper-root': {
        backgroundColor: 'white',
        boxShadow: '0px 4px 12px #F7F9FC',
    },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    padding: 0,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: theme.palette.text.primary,
    fontSize: 14,
    lineHeight: '20px',
    textAlign: 'center',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    marginRight: '0 !important',
}));
const StyledLogo = styled('img')(({ theme }) => ({
    width: 24,
    height: 24,
}));

export const SendAssetAppBar = () => {
    const navigate = useNavigate();

    return (
        <StyledBoxAppBar sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <StyledIconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => navigate('/wallet')}
                    >
                        <StyledLogo src={ChevronLeftIcon} />
                    </StyledIconButton>
                    <StyledTitle sx={{ flexGrow: 1 }}>Send Assets</StyledTitle>
                </StyledToolbar>
            </AppBar>
        </StyledBoxAppBar>
    );
};
