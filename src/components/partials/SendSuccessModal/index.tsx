import { Box, Button, Modal, Typography } from '@mui/material';
import { styled } from '@mui/system';
interface SendSuccessModalProps {
    open: boolean;
    currency: string;
    onClose: () => void;
    onOpen: () => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 336,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    height: 202,
    p: 3,
};

const StyledWrapperModal = styled(Box)(({ theme }) => ({
    // backgroundColor: 'white',
}));

const StyledTileModal = styled(Typography)(({ theme }) => ({
    fontFamily: 'SF Pro Text Medium',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: '28px',
    textAlign: 'center',
    marginBottom: 24,
    color: theme.palette.text.primary,
}));

const StyledContentModal = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '20px',
    color: theme.palette.text.primary,
}));

const StyledOkBtn = styled(Button)(({ theme }) => ({
    width: 296,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#2F80ED',
    boxShadow: 'none',
    color: 'white',
    marginTop: 24,
    '&:hover': {
        backgroundColor: '#3078d9',
    },
}));

export const SendSuccessModal = ({ open, currency, onOpen, onClose }: SendSuccessModalProps) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledWrapperModal>
                <Box sx={style}>
                    <StyledTileModal id="modal-modal-title">Successfully sent</StyledTileModal>
                    <StyledContentModal id="modal-modal-description">
                        Your <span style={{ fontWeight: 'bold' }}>{currency}</span> has been sent!
                    </StyledContentModal>
                    <StyledContentModal id="modal-modal-description">
                        Thank you for using our service
                    </StyledContentModal>
                    <StyledOkBtn onClick={onClose}>OK</StyledOkBtn>
                </Box>
            </StyledWrapperModal>
        </Modal>
    );
};
