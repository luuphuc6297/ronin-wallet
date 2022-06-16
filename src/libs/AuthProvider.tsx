import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken, removeToken } from 'utils';
import { useIntl } from 'react-intl';
import { useQueryClient } from 'react-query';
import { useSnackbar } from 'hooks';
interface AuthProviderProps {
    children: React.ReactNode;
}
export const AuthContext = React.createContext<any | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const token = getToken();
    const message = useSnackbar();
    const queryClient = useQueryClient();
    const { formatMessage } = useIntl();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!token) navigate('/login', { replace: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const logout = React.useCallback(() => {
        removeToken();
        navigate('/auth/login', { replace: true });
        message.success(formatMessage({ id: 'sign_out_successfully' }));
    }, [queryClient]);

    const contextValue = React.useMemo(
        () => ({
            logout,
            isLogged: !!token,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
