import React, {useState, createContext} from "react";

export const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {

    const [loading, setLoading] = useState(false);

    return (
        <GlobalContext.Provider value={{loading, setLoading}}>
            {children}
        </GlobalContext.Provider>
    )
};
