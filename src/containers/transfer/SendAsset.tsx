import { RoninAppStoreState, useStore } from 'app/store';
import { SendAssetFormProps } from 'models';
import { SendAssetPage } from 'pages';
import React from 'react';

const SendAssetContainer = () => {
    const { wallet }: RoninAppStoreState | any = useStore();

    const initialValues: SendAssetFormProps = {
        from: wallet?.id,
        to: '',
        assets: '',
        amount: 0,
    } as SendAssetFormProps;

    React.useEffect(() => {
        localStorage.removeItem('access_token');
    });

    const handleSendAssets = async (formValues: SendAssetFormProps) => {
        //TODO: call api to login
    };

    return <SendAssetPage initialValues={initialValues} onSubmit={handleSendAssets} />;
};

export default SendAssetContainer;
