import { Button } from '@mui/material';
import { styled } from '@mui/system';

interface CancelBtnProps {
    onClick?: () => void;
}

const CancelBtn = styled(Button)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 700,
    height: 40,
    color: '#1273EA',
    width: 160,
    backgroundColor: '#F7F9FC',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: '#e8eaed',
        boxShadow: 'none',
    },
}));

export const CancelButton = ({ onClick, ...props }: CancelBtnProps) => {
    return (
        <CancelBtn type="submit" variant="contained" fullWidth {...props} onClick={onClick}>
            Cancel
        </CancelBtn>
    );
};
