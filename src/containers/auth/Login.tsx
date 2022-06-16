import { RoninAppStoreState, useStore } from 'app/store';
import { isEmpty } from 'lodash';
import { LoginProps } from 'models';
import { LoginPage } from 'pages';
import React from 'react';

const LoginContainer = () => {
    const initialValues: LoginProps = {
        password: '',
    } as LoginProps;

    const { currencies, getCurrentUser, storeCurrencies }: RoninAppStoreState | any = useStore();

    React.useEffect(() => {
        if (isEmpty(currencies)) {
            (async () => {
                storeCurrencies();
            })();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogin = async (formValues: LoginProps) => {
        //TODO: call api to login
        await getCurrentUser();
    };

    return <LoginPage initialValues={initialValues} onSubmit={handleLogin} />;
};

export default LoginContainer;
