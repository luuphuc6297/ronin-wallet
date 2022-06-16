import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent, DialogProps, DialogTitle, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RoninAppStoreState, useStore } from 'app/store';
import { AssetCard } from 'components';
import { OptionsProps, StyledLabelLogo } from 'components/partials/SelectAssetsField';
import { Assets } from 'models';
import * as React from 'react';

export type CloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButtonClick';
export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose?: (reason: CloseReason | any) => void;
}

export interface AssetListPopupProps extends DialogProps {
    open: boolean;
    onClose: (reason: CloseReason | any) => void;
    setCurrentOptions?: (value: OptionsProps | any) => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        width: 336,
        height: 560,
        borderRadius: 16,
    },
    '& .MuiDialogContent-root': {
        padding: 0,
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    textAlign: 'center',
    fontWeight: 600,
    lineHeight: '20px',
    fontSize: 14,
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <StyledDialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={() => onClose('closeButtonClick')}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#57627B',
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </StyledDialogTitle>
    );
};

export const AssetListPopup = ({ open, onClose, setCurrentOptions }: AssetListPopupProps) => {
    const { wallet }: RoninAppStoreState | any = useStore();

    const handleOnClick = (asset: Assets) => {
        if (setCurrentOptions) {
            setCurrentOptions({
                value: asset.id,
                text: asset.code,
                icon: <StyledLabelLogo src={asset?.logo} />,
                amount: asset.amount,
            });
        }
    };

    return (
        <BootstrapDialog onClose={(_, reason) => onClose(reason)} aria-labelledby="customized-dialog-title" open={open}>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
                Assets
            </BootstrapDialogTitle>
            <DialogContent dividers>
                {wallet &&
                    wallet?.assets.map((asset: Assets) => (
                        <Box onClick={() => handleOnClick(asset)} key={asset?.id}>
                            <AssetCard logo={asset?.logo} code={asset?.code} amount={asset?.amount} />
                        </Box>
                    ))}
            </DialogContent>
        </BootstrapDialog>
    );
};
