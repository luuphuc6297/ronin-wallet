import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/system';
import { CopyIconUrl, WhiteLogoUrl } from 'assets';
import { convertToVnd, formatForVnd, numberWithCommas, getUsdAsset, numberWithSpaces } from 'helpers';
import { Wallet } from 'models';
import React from 'react';

type GradientBoxProps = {
    colors?: string[];
};

interface MyWalletProps {
    wallet: Wallet;
}

const GradientBox = styled(Box)<GradientBoxProps>(({ colors }) => ({
    borderRadius: 16,
    width: 336,
    height: 152,
    padding: 20,
    color: 'white',
    ...(colors && {
        background: `linear-gradient(to right bottom, ${colors.join(',')})`,
    }),
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
    marginBottom: 14,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '20px',
    marginRight: 8,
}));

const StyledAddress = styled(Typography)(({ theme }) => ({
    color: '#8DC9F9',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '20px',
}));

const StyledBtnCopy = styled(Button)(({ theme }) => ({
    padding: 2,
    minWidth: 0,
    background: 'transparent',
    ':hover': {
        backgroundColor: 'transparent',
    },
}));

const StyledCopy = styled('img')(({ theme }) => ({
    width: 16,
    height: 16,
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
    border: '0.5px solid #68B8F8',
    opacity: 0.5,
    marginBottom: 12,
}));

const StyledMainAssetUsd = styled(Typography)(({ theme }) => ({
    fontFamily: 'SF Pro Text Medium',
    fontSize: 32,
    fontWeight: 700,
    color: 'white',
    lineHeight: '40px',
    marginBottom: 4,
}));

const StyledMainAssetVnd = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 600,
    color: '#8DC9F9',
    lineHeight: '24px',
}));

const StyledWhiteLogo = styled('img')(({ theme }) => ({
    width: 38,
    height: 40,
}));

export const MyWallet = ({ wallet }: MyWalletProps) => {
    const [usdCurrency, setUsdCurrency] = React.useState<number>(0);
    const [vndAmount, setVndAmount] = React.useState<number>(0);

    React.useEffect(() => {
        const result = getUsdAsset(wallet);
        setUsdCurrency(result?.amount);

        if (result?.code && result?.amount) {
            (async () => {
                const vnd: number | any = await convertToVnd(result?.code, result?.amount);
                setVndAmount(vnd);
            })();
        }
    }, [wallet]);

    return (
        <GradientBox colors={[blue[700], blue[500]]}>
            <StyledGridContainer container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Grid container>
                        <StyledTypography>My wallet</StyledTypography>
                        <StyledAddress>({numberWithSpaces(wallet?.id)})</StyledAddress>
                    </Grid>
                </Grid>
                <Grid item>
                    <StyledBtnCopy>
                        <StyledCopy src={CopyIconUrl} />
                    </StyledBtnCopy>
                </Grid>
            </StyledGridContainer>
            <StyledDivider />
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <StyledMainAssetUsd>{numberWithCommas(usdCurrency)} USD</StyledMainAssetUsd>
                    <StyledMainAssetVnd>{formatForVnd(vndAmount)} VND</StyledMainAssetVnd>
                </Grid>
                <Grid item>
                    <StyledWhiteLogo src={WhiteLogoUrl} />
                </Grid>
            </Grid>
        </GradientBox>
    );
};
