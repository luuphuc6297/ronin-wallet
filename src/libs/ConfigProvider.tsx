import { LOCALE } from 'constant/common';
import React, { useMemo, useState } from 'react';
import ConfigContext from './ConfigContext';

interface ConfigProviderProps {
    children: React.ReactNode;
}

function ConfigProvider({ children }: ConfigProviderProps) {
    const [locale, setLocale] = useState(LOCALE.vi);

    const contextValue = useMemo(
        () => ({
            locale,
            setLocale,
        }),
        [locale]
    );

    return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>;
}

export default ConfigProvider;
