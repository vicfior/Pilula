import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './stylesAlarme';
import { useNavigation } from '@react-navigation/native';

const AlarmeTela = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Alarmes</Text>
        </SafeAreaView>
    );
}

export default AlarmeTela;