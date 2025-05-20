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
import homeStyles from './styles'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Contexts/AuthContext';

const pillsImage = require('../../images/pilula.png');

const Home = () => {
    const navigation = useNavigation();
    const { user } = useAuth();

    const handleStart = () => {
        if (user) {
            navigation.navigate('App', { screen: 'Menu' });
        } else {
            navigation.navigate('Auth', { screen: 'Login' });
        }
    };

    return (
        <SafeAreaView style={homeStyles.main}>
            <Image source={pillsImage} style={homeStyles.pillsImage} />
            <Text style={homeStyles.title}>
                Bem vindo ao <Text style={homeStyles.titleYellow}>Pílula</Text>
            </Text>
            <Text style={homeStyles.bodyText}>Ajudando você a lembrar de cuidar de quem importa!</Text>
            <TouchableOpacity style={homeStyles.button} onPress={handleStart}>
                <Text style={homeStyles.buttonText}>Comece agora</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Home;
