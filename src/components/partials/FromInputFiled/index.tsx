import { InputAdornment, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import { Error } from 'components/base/Typography/Error';
import { formatHideAddress } from 'helpers';
import React from 'react';
import { Control, useController } from 'react-hook-form';
interface FromInputFiledProps {
    name: string;
    control: Control<any>;
    label?: string;

    apiError?: any;
    htmlFor?: string;
    InputProps?: any;
}

const StyledFromInputField = styled(TextField)(({ theme }) => ({
    marginTop: 0,
    height: 40,
    width: 336,
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#EDF1F7',
        fontWeight: 400,
        fontSize: 14,
        color: '#8F9BB3',
    },
    '& .MuiInputAdornment-root': {
        height: 0,
    },
}));

const StyledTextFiledLabel = styled(InputLabel)(({ theme }) => ({
    width: 336,
    margin: '0 auto 4px auto',
    fontFamily: 'SF Pro Text Medium',
    fontSize: 10,
    fontWeight: 700,
    lineHeight: '16px',
    color: '#57627B',
    textAlign: 'left',
}));

const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
    fontWeight: 400,
    fontSize: 16,
    fontStyle: 'normal',
    marginTop: '0 !important',
    backgroundColor: '#C5CEE0',
}));

const StyledPrefix = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '20px',
    color: '#8F9BB3',
    '& .MuiInputAdornment-root': {
        height: 0,
    },
}));

export const FromInputFiled = ({ name, control, apiError, InputProps, ...inputProps }: FromInputFiledProps) => {
    const [formatValue, setFormatted] = React.useState<string | any>();

    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    React.useEffect(() => {
        const result = formatHideAddress(value);
        setFormatted(`(${result})`);
    }, [value]);

    return (
        <>
            <StyledTextFiledLabel htmlFor="from">FROM</StyledTextFiledLabel>
            <StyledFromInputField
                fullWidth
                size="small"
                margin="normal"
                value={formatValue}
                onChange={onChange}
                onBlur={onBlur}
                variant="outlined"
                inputRef={ref}
                error={invalid}
                disabled
                inputProps={inputProps}
                InputProps={{
                    startAdornment: (
                        <StyledInputAdornment position="start">
                            <StyledPrefix>My wallet</StyledPrefix>
                        </StyledInputAdornment>
                    ),
                }}
            />
            <Error error={true}>{error?.message || apiError}</Error>
        </>
    );
};
