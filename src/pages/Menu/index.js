import React from 'react';
import { 
    View, 
    TextView, 
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,  
    Image,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const pillsImage = require('../../images/pilula.png');

const Menu = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.main}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>Pílula</Text>
                <Image source={pillsImage} style={styles.pillsImage} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddRemedio')}>
                        <Text style={styles.buttonText}>Adicionar remédio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaRemedio')}>
                        <Text style={styles.buttonText}>Lista de remédios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaHorarios')}>
                        <Text style={styles.buttonText}>Lista de Horários</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Alarme')}>
                        <Text style={styles.buttonText}>Seus Alarmes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User')}>
                        <Text style={styles.buttonText}>Informações da Conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Menu;