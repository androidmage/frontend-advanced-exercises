import React from 'react';

export const colorContext = React.createContext({
    colors: [],
    colorMap: new Map(),
    updateColorMapping: (key: number, color: string) => {},
});

export const useColorContext = () => React.useContext(colorContext);