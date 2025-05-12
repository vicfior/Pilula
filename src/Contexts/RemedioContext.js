import React,  { createContext, useContext, useState } from 'react';

export const RemedioContext = createContext();

export const RemedioProvider = ({ children }) => {
    const [remedios, setRemedios] = useState([]);
    
    const adicionarRemedio = (novoRemedio) => {
        setRemedios((prev) => [...prev, novoRemedio]);
    }

    return (
        <RemedioContext.Provider value={{ remedios, adicionarRemedio }}>
            {children}
        </RemedioContext.Provider>
    );
};

export const useRemedio = () => useContext(RemedioContext);
