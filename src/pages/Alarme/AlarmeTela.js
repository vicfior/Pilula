import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './stylesAlarme';
import { useNavigation } from '@react-navigation/native';

const image = require('../../images/relogio.png');

const AlarmeTela = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Hora da <Text style={styles.titleYellow}>Pílula</Text></Text>
                <Image source={image} style={styles.image}/>
            </View>
        </SafeAreaView>
    );
}

export default AlarmeTela;