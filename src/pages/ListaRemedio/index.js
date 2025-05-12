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
import styles from './listStyles';
import { useNavigation } from '@react-navigation/native';

const ListaRemedio = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={homeStyles.main}>
            <Text>Lista de remédios</Text>
        </SafeAreaView>
    );
}

export default ListaRemedio;