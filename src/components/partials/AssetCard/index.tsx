import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { convertToVnd, formatForVnd } from 'helpers';
import React from 'react';
interface AssetCardProps {
    logo?: string;
    code?: string;
    amount?: number;
}

const StyledCard = styled(Card)(({ theme }) => ({
    width: 336,
    paddingLeft: 20,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#F7F9FC',
    boxShadow: 'none',
    marginBottom: 8,
    '&:hover': {
        transform: 'scale(1.05)',
        transitionDuration: '0.5s !important',
        backgroundColor: '#e1e3e6',
    },
}));

const StyledCurrenciesIconWrapper = styled(Box)(({ theme }) => ({
    marginRight: 16,
}));

const StyledCurrenciesIcon = styled('img')(({ theme }) => ({
    width: 32,
    height: 32,
}));

const StyledCurrency = styled(Typography)(({ theme }) => ({
    marginBottom: 4,
}));
const StyledVnd = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '16px',
    color: '#8F9BB3',
}));

export const AssetCard = ({ logo, code, amount }: AssetCardProps) => {

    const [vndAmount, setVndAmount] = React.useState(0);

    React.useEffect(() => {
        if (code && amount) {
            (async () => {
                const vnd: number | any = await convertToVnd(code, amount);
                setVndAmount(vnd);
            })();
        }
    }, [amount, code]);


    return (
        <StyledCard>
            <Box sx={{ display: 'flex' }}>
                <StyledCurrenciesIconWrapper sx={{ display: 'flex', alignItems: 'center' }}>
                    <StyledCurrenciesIcon src={logo} />
                </StyledCurrenciesIconWrapper>
                <Box>
                    <StyledCurrency variant="body2">{`${amount} ${code}`}</StyledCurrency>
                    <StyledVnd>{formatForVnd(vndAmount)} VND</StyledVnd>
                </Box>
            </Box>
        </StyledCard>
    );
};
