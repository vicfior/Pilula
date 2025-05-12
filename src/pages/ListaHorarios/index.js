import React from 'react';
import { 
    View, 
    TextView, 
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,  
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const ListaHorarios = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.main}>
            <Text>Lista de horários</Text>
        </SafeAreaView>
    );
}

export default ListaHorarios;