import React,  { createContext, useContext, useState } from 'react';

export const RemedioContext = createContext();

export const RemedioProvider = ({ children }) => {
    const [remedios, setRemedios] = useState([]);
    
    const adicionarRemedio = (novoRemedio) => {
        const remedioParaAdicionar = {
            ...novoRemedio,
            tipo: novoRemedio.tipo || 'Comprimido',
        };
        setRemedios((prev) => [...prev, remedioParaAdicionar]);
    }

    return (
        <RemedioContext.Provider value={{ remedios, adicionarRemedio }}>
            {children}
        </RemedioContext.Provider>
    );
};

export const useRemedio = () => useContext(RemedioContext);
