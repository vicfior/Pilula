import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Vibration} from 'react-native';
import styles from './stylesAlarme';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { useHistorico } from '../../Contexts/HistoricoContext';

const image = require('../../images/relogio.png');
const imagemCheck = require('../../images/check2.png');

const AlarmeTela = () => {
    const navigation = useNavigation();
    
    useEffect(() => {
        Vibration.vibrate(2000); // vibra por 2 segundos
    }, []);

    const route = useRoute();
    const {nome, tipo, hora} = route.params;
    const { marcarAdministrado } = useHistorico();

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