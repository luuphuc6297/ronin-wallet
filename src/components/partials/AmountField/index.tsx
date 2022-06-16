import { OptionsProps } from 'components/partials/SelectAssetsField';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Error } from 'components/base/Typography/Error';
import { TextFiledLabel } from 'components/base/Typography/TextFiledLabel';
import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface AmountFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
    apiError?: any;
    htmlFor?: string;
    currentOption?: OptionsProps;
    handleMaxAmount?: () => void;
}

const StyledInput = styled(TextField)({
    maxWidth: 438,
    width: 336,
    height: 40,
    borderRadius: 8,
    marginTop: 0,
});

const StyledMaxBtnLabel = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    width: 41,
    height: 20,
    background: '#EEF3FB',
    borderRadius: 8,
    fontSize: 10,
    lineHeight: '16px',
    fontFamily: 'Inter',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#57627B',
    letterSpacing: '0.5px',
}));

const StyledAvailable = styled(Typography)(({ theme }) => ({
    width: 336,
    fontSize: 10,
    fontWeight: 700,
    lineHeight: '16px',
    color: theme.palette.text.primary,
    textAlign: 'right',
    fontFamily: 'SF Pro Text Medium',
}));

export function AmountField({
    name,
    control,
    apiError,
    label,
    currentOption,
    handleMaxAmount,
    ...inputProps
}: AmountFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <>
            <Box sx={{ width: 336, display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
                <TextFiledLabel htmlFor="amount">AMOUNT</TextFiledLabel>
                <StyledAvailable>AVAILABLE: {`${currentOption?.amount} ${currentOption?.text}`}</StyledAvailable>
            </Box>
            <StyledInput
                fullWidth
                size="small"
                margin="normal"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                variant="outlined"
                inputRef={ref}
                error={invalid}
                label={label}
                inputProps={inputProps}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleMaxAmount} edge="end">
                                <StyledMaxBtnLabel>MAX</StyledMaxBtnLabel>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& > fieldset': { border: '1px solid #C5CEE0' },
                    },
                    '& .MuiOutlinedInput-root.Mui-focused': {
                        '& > fieldset': {
                            border: '1px solid #C5CEE0',
                        },
                    },
                    '& .MuiOutlinedInput-root:hover': {
                        '& > fieldset': {
                            border: '1px solid #C5CEE0',
                        },
                    },
                }}
            />
            <Error error={true}>{error?.message || apiError}</Error>
        </>
    );
}
