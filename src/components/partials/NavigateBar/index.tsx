import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import menuItem from './menu-item.json';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    width: 48,
    height: 48,
    padding: 12,
    backgroundColor: '#F7F9FC',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    opacity: 0.5,
    '&:hover': {
        opacity: 1,
        transform: 'scale(1.05)',
        transitionDuration: '0.5s',
        backgroundColor: '#e1e3e6',
    },
}));

const StyledLogo = styled('img')(({ theme }) => ({
    marginBottom: 4,
}));

const StyledTittle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '20px',
    opacity: 0.5,
    '&:hover': {
        opacity: 1,
        transform: 'scale(1.05)',
        transitionDuration: '0.5s',
    },
}));
export const NavigateBar = () => {
    const [active, setActive] = React.useState();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Grid container spacing={4}>
                {menuItem.map((item) => (
                    <Grid item key={item?.id}>
                        <StyledNavLink id={item?.id} to={item?.to}>
                            <StyledLogo src={item?.icon} />
                        </StyledNavLink>
                        <StyledTittle>{item?.title}</StyledTittle>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
