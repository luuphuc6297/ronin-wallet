import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RoninAppStoreState, useStore } from 'app/store';
import {
    AmountField, CancelButton, FromInputFiled,
    InputField,
    SelectAssetsField,
    SendAssetAppBar, SendSuccessModal, SubmitButton
} from 'components';

import { OptionsProps, StyledLabelLogo } from 'components/partials/SelectAssetsField';
import { Assets, SendAssetFormProps } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

const StyledSubmitBtn = styled(SubmitButton)(({ theme }) => ({
    width: 160,
}));

const SendAssetPage = ({ initialValues, onSubmit }: SendAssetProps) => {
    const navigate = useNavigate();

    const { wallet }: RoninAppStoreState | any = useStore();
    const [open, setOpen] = React.useState<boolean>(false);
    const [currentOption, setCurrentOptions] = React.useState<OptionsProps[] | any>();
    const [options, setOptions] = React.useState<any>();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid },
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

    const handleCancel = () => {
        navigate('/wallet');
    };

    const handleOpenModal = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <SendAssetAppBar />
            <StyledGridContainer container>
                <StyledContainer maxWidth="xs">
                    <Grid item mb={2}>
                        <FromInputFiled control={control} name="from" />
                    </Grid>
                    <Grid item mb={2}>
                        <InputField control={control} name="to" htmlFor="to" textLabel="TO" />
                    </Grid>

                    <Grid item mb={2}>
                        <SelectAssetsField
                            htmlFor="assets"
                            textLabel="ASSETS"
                            options={options}
                            currentOption={currentOption}
                            setCurrentOptions={setCurrentOptions}
                        />
                    </Grid>
                    <Grid item>
                        <AmountField
                            control={control}
                            name="amount"
                            currentOption={currentOption}
                            handleMaxAmount={handleMaxAmount}
                        />
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 336, margin: '0 auto' }}>
                        <CancelButton onClick={handleCancel} />

                        {/* <StyledSubmitBtn disabled={!isValid || isSubmitting}>
                            {isSubmitting && <CircularProgress size={16} />}
                            &nbsp;Send
                        </StyledSubmitBtn> */}
                        <StyledSubmitBtn onClick={handleOpenModal}>Send</StyledSubmitBtn>
                    </Box>
                </StyledContainer>
            </StyledGridContainer>
            <SendSuccessModal
                open={open}
                onOpen={handleOpenModal}
                onClose={handleClose}
                currency={currentOption?.text}
            />
        </Box>
    );
};

export default SendAssetPage;
