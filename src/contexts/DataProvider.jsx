import { createContext } from 'react';
import useDataProvider from '../hooks/useDataProvider';

export const ContextData = createContext({});

function DataProvider({ children }) {
    const dataProvider = useDataProvider();
    return (
        <ContextData.Provider value={dataProvider}>
            {children}
        </ContextData.Provider>
    )
}

export default DataProvider;