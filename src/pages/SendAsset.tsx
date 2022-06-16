import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RoninAppStoreState, useStore } from 'app/store';
import { AmountField, FromInputFiled, InputField, SelectAssetsField, SendAssetAppBar } from 'components';
import { OptionsProps, StyledLabelLogo } from 'components/partials/SelectAssetsField';
import { Assets, SendAssetFormProps } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SendAssetSchema } from './validation';
interface SendAssetProps {
    initialValues?: SendAssetFormProps;
    onSubmit?: (formValues: SendAssetFormProps) => void;
}

const StyledGridContainer = styled(Grid)(({ theme }) => ({
    height: '100vh',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    textAlign: 'center',
    margin: '24px auto',
    [theme.breakpoints.down('sm')]: {
        width: theme.breakpoints.values.sm,
    },
}));

const SendAssetPage = ({ initialValues, onSubmit }: SendAssetProps) => {
    const [currentOption, setCurrentOptions] = React.useState<OptionsProps[] | any>();
    const { wallet }: RoninAppStoreState | any = useStore();
    const [options, setOptions] = React.useState<any>();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        setValue,
    } = useForm<SendAssetFormProps>({
        defaultValues: initialValues,
        resolver: yupResolver(SendAssetSchema),
    });

    React.useEffect(() => {
        if (wallet) {
            const getOptions: OptionsProps[] | any = wallet?.assets.map((asset: Assets) => {
                return {
                    value: asset?.id,
                    text: asset?.code,
                    icon: <StyledLabelLogo src={asset?.logo} />,
                    amount: asset?.amount,
                };
            });
            setOptions(getOptions);
            setCurrentOptions(getOptions[0]);
        }
    }, [wallet]);

    const handleMaxAmount = React.useCallback(() => {
        if (currentOption) {
            setValue('amount', currentOption?.amount);
        }
    }, [currentOption, setValue]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <SendAssetAppBar />
            <StyledGridContainer container>
                <StyledContainer maxWidth="xs">
                    <FromInputFiled control={control} name="from" />

                    <InputField control={control} name="to" htmlFor="to" textLabel="TO" />

                    <SelectAssetsField
                        htmlFor="assets"
                        textLabel="ASSETS"
                        options={options}
                        currentOption={currentOption}
                        setCurrentOptions={setCurrentOptions}
                    />

                    <AmountField
                        control={control}
                        name="amount"
                        currentOption={currentOption}
                        handleMaxAmount={handleMaxAmount}
                    />
                </StyledContainer>
            </StyledGridContainer>
        </Box>
    );
};

export default SendAssetPage;
