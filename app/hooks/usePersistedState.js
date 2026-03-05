import { useState, useEffect, useRef } from 'react';

// defaultValue: initial value if no stored value, or when preferDefaultOnFirstRender is true
// name: storage key
// type: "localStorage" | "sessionStorage" (defaults to sessionStorage when undefined)
// preferDefaultOnFirstRender: when true, defaultValue takes precedence over any stored value on first render
const usePersistedState = (defaultValue, name, type, preferDefaultOnFirstRender = false) => {
    const hasInitializedRef = useRef(false);
    const getStorage = () => {
        if (typeof window === 'undefined') return null;
        return type === "localStorage" ? window.localStorage : window.sessionStorage;
    };

    const [value, setValue] = useState(() => {
        const storage = getStorage();
        if (!storage) return defaultValue;
        if (preferDefaultOnFirstRender) return defaultValue;
        const stored = storage.getItem(name);
        return stored ? JSON.parse(stored) : defaultValue;
    });

    useEffect(() => {
        hasInitializedRef.current = true;
    }, []);

    useEffect(() => {
        const storage = getStorage();
        if (!storage) return;
        storage.setItem(name, JSON.stringify(value));
        // eslint-disable-next-line
    }, [value]);

    return [value, setValue];
}
export default usePersistedState;