import React, { createContext, useContext, useEffect, useState } from 'react';
import { RemedioContext } from './RemedioContext';
import { gerarHorarios } from '../pages/ListaHorarios'
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const AlarmeContext = createContext();

export const AlarmeProvider = ({ children }) => {
    const { remedios } = useContext(RemedioContext);
    const [alarmes, setAlarmes] = useState([]);

    const gerarAlarmesDosRemedios = async () => {
        const novosAlarmes = remedios.flatMap(remedio => {
        const horarios = gerarHorarios(
            remedio.hora,
            remedio.frequencia,
            parseInt(remedio.duracao)
        );
        return horarios.map(h => ({
            id: `${remedio.nome}-${h.dia}-${h.hora}`, //ex.: id: Alenia-13/05/2025-11:00
            nomeRemedio: remedio.nome,
            tipo: remedio.tipo,
            data: h.dia,
            hora: h.hora,
            ativo: true, 
        }));
        });
        setAlarmes(novosAlarmes);

        //agenda alarmes ativos 
        for (const alarme of novosAlarmes) {
            if (alarme.ativo) {
            await agendarNotificacao(alarme);
            }
        }
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

    useEffect(() => {
        const pedirPermissao = async() => {
            const {status} = await Notifications.requestPermissionsAsync();
            if(status != 'granted'){
                alert('Ative a permisão de notificação');
            }
        };
        pedirPermissao();
    }, []);

    const agendarNotificacao = async (alarme) => {
    const [hora, minuto] = alarme.hora.split(':').map(Number);
    const [dia, mes, ano] = alarme.data.split('/').map(Number); 

    const dataNotificacao = new Date(ano, mes - 1, dia, hora, minuto);

        await Notifications.scheduleNotificationAsync({
            content: {
            title: `Hora do remédio!`,
            body: `Tome o ${alarme.nomeRemedio} (${alarme.tipo}) agora.`,
                data: { 
                    id: alarme.id,
                    nome: alarme.nomeRemedio, 
                    tipo: alarme.tipo,         
                    hora: alarme.hora,          
                }, 
            },
            trigger: dataNotificacao,
        });
    };

  return (
    <AlarmeContext.Provider value={{ alarmes, alternarAtivacao, removerAlarme, editarAlarme }}>
      {children}
    </AlarmeContext.Provider>
  );
};
