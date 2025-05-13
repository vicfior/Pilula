// src/Contexts/AlarmeContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { RemedioContext } from './RemedioContext';
import { gerarHorarios } from '../pages/ListaHorarios'

export const AlarmeContext = createContext();

export const AlarmeProvider = ({ children }) => {
  const { remedios } = useContext(RemedioContext);
  const [alarmes, setAlarmes] = useState([]);

  const gerarAlarmesDosRemedios = () => {
    const novosAlarmes = remedios.flatMap(remedio => {
      const horarios = gerarHorarios(
        remedio.hora,
        remedio.frequencia,
        parseInt(remedio.duracao)
      );
      return horarios.map(h => ({
        id: `${remedio.nome}-${h.dia}-${h.hora}`,
        nomeRemedio: remedio.nome,
        tipo: remedio.tipo,
        data: h.dia,
        hora: h.hora,
        ativo: true, 
      }));
    });
    setAlarmes(novosAlarmes);
  };

  useEffect(() => {
    gerarAlarmesDosRemedios();
  }, [remedios]);

  const alternarAtivacao = (id) => {
    setAlarmes(prev =>
      prev.map(alarme =>
        alarme.id === id ? { ...alarme, ativo: !alarme.ativo } : alarme
      )
    );
  };

  const removerAlarme = (id) => {
    setAlarmes(prev => prev.filter(alarme => alarme.id !== id));
  };

  const editarAlarme = (id, novosDados) => {
    setAlarmes(prev =>
        prev.map(alarme =>
        alarme.id === id ? { ...alarme, ...novosDados } : alarme
        )
    );
};

  return (
    <AlarmeContext.Provider value={{ alarmes, alternarAtivacao, removerAlarme, editarAlarme }}>
      {children}
    </AlarmeContext.Provider>
  );
};
