import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/system';
import React from 'react';

interface CustomInputLabelProps {
    children?: string;
    htmlFor?: string;
}
const CustomInputLabel = styled(InputLabel)({
    width: 336,
    margin: '0 auto 4px auto',
    fontSize: 10,
    fontWeight: 700,
    lineHeight: '16px',
    color: '#57627B',
    textAlign: 'left',
    fontFamily: 'SF Pro Text Medium',
});

export function TextFiledLabel({ htmlFor, children }: CustomInputLabelProps) {
    return <CustomInputLabel htmlFor={htmlFor}>{children}</CustomInputLabel>;
}
