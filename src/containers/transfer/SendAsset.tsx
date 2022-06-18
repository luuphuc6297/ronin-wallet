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

    const handleSendAssets = async (formValues: SendAssetFormProps) => {
        console.log('formValues___', formValues);
        //TODO: call api to send
    };

    return <SendAssetPage initialValues={initialValues} onSubmit={handleSendAssets} />;
};

export default SendAssetContainer;
