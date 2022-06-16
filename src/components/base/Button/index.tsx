import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/system';

type GradientBtnProps = {
    colors?: string[];
};

const SubmitGradientBtn = styled(Button)<GradientBtnProps>(({ colors }) => ({
    fontSize: 16,
    fontWeight: 700,
    height: 40,
    marginBottom: 24,
    color: 'white',
    width: 88,
    boxShadow: 'none',
    ...(colors && {
        background: `linear-gradient(to right bottom, ${colors.join(',')})`,
    }),
}));

export const SubmitButton = ({ children, ...props }: any) => {
    return (
        <SubmitGradientBtn type="submit" variant="contained" fullWidth {...props} colors={[blue[500], blue[700]]}>
            {children}
        </SubmitGradientBtn>
    );
};
