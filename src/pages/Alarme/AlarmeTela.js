import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Vibration, Alert } from 'react-native';
import styles from './stylesAlarme';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { useHistorico } from '../../Contexts/HistoricoContext';
import { useAuth } from '../../Contexts/AuthContext';
import * as SMS from 'expo-sms';

const image = require('../../images/relogio.png');
const imagemCheck = require('../../images/check2.png');

const AlarmeTela = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    
    useEffect(() => {
        Vibration.vibrate(2000); // vibra por 2 segundos

        // Adiciona um atraso de 2 segundos antes de tentar enviar o SMS
        const timer = setTimeout(() => {
            enviarSMS();
        }, 2000); // 2000ms = 2 segundos

        // Limpa o timer se o componente for desmontado antes do atraso terminar
        return () => clearTimeout(timer);

    }, []); // Array de dependências vazio garante que isso rode apenas na montagem

    const route = useRoute();
    const {nome, tipo, hora} = route.params;
    const { marcarAdministrado } = useHistorico();

    async function enviarSMS() {
        if (!user?.phone) return;
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            await SMS.sendSMSAsync([user.phone], `Lembrete: Está na hora de tomar seu remédio: ${nome} (${tipo}) às ${hora}`);
        } else {
            Alert.alert('Erro', 'O envio de SMS não está disponível neste dispositivo.');
        }
    }

    const handleAdministrado = () => {
        const hoje = new Date().toLocaleDateString();
        marcarAdministrado({ nome, tipo, hora, data: hoje });
        navigation.navigate('ListaHorarios');
    };    

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Hora da <Text style={styles.titleYellow}>Pílula</Text></Text>
                <Image source={image} style={styles.image}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoHora}> {hora}</Text>
                    <Text style={styles.infoText}> {nome}</Text>
                    <Text style={styles.infoCapsula}> {tipo}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleAdministrado}>
                    <Image source={imagemCheck} style={styles.imagemCheck}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default AlarmeTela;