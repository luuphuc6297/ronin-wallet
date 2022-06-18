import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const CircularIndeterminate = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <CircularProgress size={24} color="primary" />
        </Box>
    );
};
