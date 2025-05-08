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
import styles from './homeStyles';
import homeStyles from './homeStyles';

const pillsImage = require('../../images/pilula.png');

const Home = () => {
    return (
        <SafeAreaView style={homeStyles.main}>
            <Image source={pillsImage} style={homeStyles.pillsImage} />
            <Text style={homeStyles.title}>
                Bem vindo ao <Text style={homeStyles.titleYellow}>Pílula</Text>
            </Text>
            <Text style={homeStyles.bodyText}>Ajudando você a lembrar de cuidar de quem importa!</Text>
            <TouchableOpacity style={homeStyles.button}>
                <Text style={homeStyles.buttonText}>Comece agora</Text>
            </TouchableOpacity>
        
        </SafeAreaView>
    );
}

export default Home;
