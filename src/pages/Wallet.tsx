import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { RoninAppStoreState, useStore } from 'app/store';
import { Account, AssetCard, MyWallet, NavigateBar, RoninStatus } from 'components';
import React from 'react';
import { Assets } from 'models';

const StyledGridContainer = styled(Grid)({
    height: '100vh',
});

const StyledContainer = styled(Container)(({ theme }) => ({
    margin: '0 auto',
    [theme.breakpoints.down(720)]: {
        maxWidth: theme.breakpoints.values.xs,
    },
}));

const StyledGridAccount = styled(Grid)(({ theme }) => ({
    paddingTop: 20,
    paddingBottom: 20,
}));

const StyledGridWallet = styled(Grid)(({ theme }) => ({
    padding: 0,
    [theme.breakpoints.down(720)]: {
        justifyContent: 'center',
    },
}));

const StyledGridNavigateBar = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
}));

const StyledAssetTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '20px',
    marginBottom: 12,
    color: theme.palette.text.primary,
}));

const WalletPage = () => {
    const { wallet }: RoninAppStoreState | any = useStore();

    return (
        <StyledGridContainer container>
            <StyledContainer maxWidth="sm">
                <StyledGridAccount container justifyContent="space-between">
                    <Grid item>
                        <RoninStatus />
                    </Grid>
                    <StyledGridWallet item>
                        <Account />
                    </StyledGridWallet>
                </StyledGridAccount>
                <StyledGridWallet container justifyContent="space-between" spacing={2}>
                    <Grid item>
                        <MyWallet wallet={wallet} />
                        <StyledGridNavigateBar pt={2.5} justifyContent="center">
                            <NavigateBar />
                        </StyledGridNavigateBar>
                    </Grid>
                    <Grid item>
                        <StyledAssetTitle>Assets</StyledAssetTitle>
                        <Grid item xs={6}>
                            {wallet &&
                                wallet?.assets.map((asset: Assets) => (
                                    <AssetCard
                                        key={asset?.id}
                                        logo={asset?.logo}
                                        code={asset?.code}
                                        amount={asset?.amount}
                                    />
                                ))}
                        </Grid>
                    </Grid>
                </StyledGridWallet>
            </StyledContainer>
        </StyledGridContainer>
    );
};

export default WalletPage;
