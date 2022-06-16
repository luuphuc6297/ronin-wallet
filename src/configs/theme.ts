import { createTheme } from '@mui/material/styles';
const SFProTextTTF = '/fonts/SFProText-Regular.ttf';
const SFProTextMediumTFF = '/fonts/SFProText-Medium.ttf';
const InterRegularTTF = '/fonts/Inter-Regular.ttf';
declare module '@mui/material/styles/createTypography' {
    interface TypographyOptions {
        medium: string;
        inter: string;
    }
    interface Typography {
        medium: string;
        inter: string;
    }
}

const SFProText = `@font-face {
    font-family: SF Pro Text;
    src: url(${SFProTextTTF}) format("opentype");
}`;

const SFProTextMedium = `@font-face {
    font-family: SF Pro Text Medium;
    src: url(${SFProTextMediumTFF}) format("opentype");
}`;

const Inter = `@font-face {
    font-family: Inter;
    src: url(${InterRegularTTF}) format("opentype");
}`;

const theme = createTheme({
    palette: {
        primary: {
            main: '#1C94F4',
        },
        text: {
            primary: '#151A30',
        },
    },
    typography: {
        fontFamily: ['SF Pro Text'].join(','),
        medium: 'SF Pro Text Medium',
        inter: 'Inter',
        h1: { fontSize: 32, fontWeight: 700, lineHeight: '32px' },
        body1: { fontSize: 16, fontWeight: 700, lineHeight: '20px' },
        body2: { fontSize: 14, fontWeight: 600, lineHeight: '20px' },
        caption: { fontSize: 14, fontWeight: 400, lineHeight: '20px' },
        button: { fontSize: 14, fontWeight: 600, lineHeight: '20px', textTransform: 'none', boxShadow: 'none' },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontFamily: 'SF Pro Text',
                    fontSize: 14,
                    fontWeight: 400,
                    fontStyle: 'normal',
                    color: '#151A30',
                    borderColor: '#C5CEE0',
                    lineHeight: '20px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'SF Pro Text',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '20px',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
            ${SFProText}
            ${SFProTextMedium}
            ${Inter}
            `,
        },
    },
    shape: {
        borderRadius: 8,
    },
    breakpoints: {
        values: {
            xs: 480,
            sm: 768,
            md: 1080,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
