import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Error } from 'components/base/Typography/Error';
import { TextFiledLabel } from 'components/base/Typography/TextFiledLabel';
import { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
    textLabel?: string;
    apiError?: any;
    htmlFor?: string;
    InputProps?: any;
}

const StyledInput = styled(TextField)({
    maxWidth: 438,
    width: 336,
    height: 40,
    borderRadius: 8,
    marginTop: 0,
});

export function InputField({
    name,
    control,
    textLabel,
    label,
    apiError,
    htmlFor,
    InputProps,
    ...inputProps
}: InputFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <>
            <TextFiledLabel htmlFor={htmlFor}>{textLabel}</TextFiledLabel>
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
                InputProps={InputProps}
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
