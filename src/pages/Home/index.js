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

const pillsImage = require('../../images/pilula.png');

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={homeStyles.main}>
            <Image source={pillsImage} style={homeStyles.pillsImage} />
            <Text style={homeStyles.title}>
                Bem vindo ao <Text style={homeStyles.titleYellow}>Pílula</Text>
            </Text>
            <Text style={homeStyles.bodyText}>Ajudando você a lembrar de cuidar de quem importa!</Text>
            <TouchableOpacity style={homeStyles.button}>
                <Text style={homeStyles.buttonText} onPress={() => navigation.navigate('Menu')}>Comece agora</Text>
            </TouchableOpacity>
        
        </SafeAreaView>
    );
}

export default Home;
