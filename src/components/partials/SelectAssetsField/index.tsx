import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RoninAppStoreState, useStore } from 'app/store';
import { StackIconUrl } from 'assets';
import { AssetListPopup } from 'components';
import { TextFiledLabel } from 'components/base/Typography/TextFiledLabel';
import { CloseReason } from 'components/partials/AssetListPopup';
import { isEmpty } from 'lodash';
import { Assets } from 'models';
import React from 'react';
import Select from 'react-select';

export interface OptionsProps {
    value: string;
    text: string;
    icon: any;
    amount?: number | any;
}
interface SelectAssetsFieldProps {
    htmlFor?: string;
    textLabel?: string;
    currentOption?: OptionsProps;
    setCurrentOptions?: (value: OptionsProps | any) => void;
    options: OptionsProps[];
}

const customStyles = {
    control: () => ({
        display: 'flex',
        width: 336,
        height: 40,
        border: '1px solid #C5CEE0',
        borderRadius: 8,
        margin: '0 auto',
        justifyContent: 'space-between',
        marginBottom: 16,
    }),
    indicatorsContainer: () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        '&:hover': {
            borderRadius: '0 8px 8px 0',
            backgroundColor: '#ebedf0',
        },
    }),
    singleValue: ({ provided, state }: any) => {
        const opacity = state?.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    },
    valueContainer: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
    }),
};

export const StyledLabelLogo = styled('img')(({ theme }) => ({
    width: 24,
    height: 24,
}));

const StyledIcon = styled('img')(({ theme }) => ({
    width: 20,
    height: 20,
}));

export const SelectAssetsField = ({
    htmlFor,
    textLabel,
    currentOption,
    setCurrentOptions,
    options,
}: SelectAssetsFieldProps) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleClose = (value: CloseReason) => {
        setOpen(false);
    };

    return (
        <Box onClick={() => setOpen(!open)}>
            <TextFiledLabel htmlFor={htmlFor}>{textLabel}</TextFiledLabel>
            {!isEmpty(options) && (
                <Select
                    isClearable={false}
                    theme={(theme) => ({ ...theme, borderRadius: 0 })}
                    styles={customStyles}
                    placeholder={''}
                    defaultValue={options[0]}
                    components={{
                        DropdownIndicator: () => {
                            return <StyledIcon src={StackIconUrl} />;
                        },
                        IndicatorSeparator: () => null,
                    }}
                    options={options}
                    //@ts-ignore
                    getOptionLabel={(e: OptionsProps) => (
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            {e.icon}
                            <Typography style={{ marginLeft: 5, fontWeight: 400 }}>{e.text}</Typography>
                        </Box>
                    )}
                    value={currentOption}
                    openMenuOnClick={false}
                    isSearchable={false}
                />
            )}
            <AssetListPopup open={open} onClose={handleClose} setCurrentOptions={setCurrentOptions} />
        </Box>
    );
};
