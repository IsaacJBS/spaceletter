import { useLocalStorage } from 'react-use';
import { useState } from 'react';

function useDataProvider() {
    const [token, setToken, removeToken] = useLocalStorage("token", "");
    const [loading, setLoading] = useState(false);
    const [toggleEye, setToggleEye] = useState(false);

    return {
        token,
        setToken,
        removeToken,
        loading,
        setLoading,
        toggleEye,
        setToggleEye
    }
}

export default useDataProvider;