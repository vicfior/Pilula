import React, { createContext, useState, useContext } from 'react';

export const HistoricoContext = createContext();

export const HistoricoProvider = ({ children }) => {
    const [administrados, setAdministrados] = useState([]);
    const marcarAdministrado = (registro) => {
        setAdministrados((prev) => [...prev, registro]);
    }

    const Verificacao = (registro) => {
        return administrados.some(r => 
            r.nome === registro.nome &&
            r.tipo === registro.tipo && 
            r.data === registro.dia && 
            r.hora === registro.hora
        );
    }
    return (
        <HistoricoContext.Provider value={{ administrados, marcarAdministrado, Verificacao }}>
            {children}
        </HistoricoContext.Provider>
    );
};

export const useHistorico = () => useContext(HistoricoContext);