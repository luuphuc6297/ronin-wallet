import { useSnackbar as useNotiStack } from 'notistack';
import { useCallback } from 'react';

export const useSnackbar = () => {
    const { enqueueSnackbar } = useNotiStack();

    const success = useCallback((message: string) => enqueueSnackbar(message, { variant: 'success' }), []);
    const error = useCallback((message: string) => enqueueSnackbar(message, { variant: 'error' }), []);
    const warning = useCallback((message: string) => enqueueSnackbar(message, { variant: 'warning' }), []);
    const info = useCallback((message: string) => enqueueSnackbar(message, { variant: 'info' }), []);

    return {
        success,
        error,
        warning,
        info,
    };
};
