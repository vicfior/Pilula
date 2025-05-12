import React, { useState } from 'react';
import { 
    View, 
    Text,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,  
    Image,
    ScrollView,
    TextInput,
    Platform
} from 'react-native';
import {ArrowLeft} from 'phosphor-react-native';
import addStyles from './addStyles';
import { useNavigation } from '@react-navigation/native';

const image = require('../../images/Group 3 (1).png');
const pills = require('../../images/AddPillsImage.png');

const AddRemedio = () => {
    const navigation = useNavigation();
    const [nomeRemedio, setNomeRemedio] = useState('');
    const [dosagem, setDosagem] = useState('');
    const [frequencia, setFrequencia] = useState('1x por dia');
    const [hora, setHora] = useState(new Date());
    const [dataInicio, setDataInicio] = useState(new Date());
    const [obs, setObs] = useState('');

    const [showHora, setShowHora] = useState(false);
    const [showData, setShowData] = useState(false);

    return (
            <SafeAreaView style={addStyles.main}>
                <ScrollView>    
                    <ImageBackground
                        source={image}
                        style={addStyles.imageBackground}
                        resizeMode="cover"
                    >
                    <TouchableOpacity style={addStyles.icon} onPress={() => navigation.navigate('Home')}>
                        <ArrowLeft size={32} color="white" weight="bold" />
                    </TouchableOpacity>
                    </ImageBackground>
                    <Text style={addStyles.title}>Adicionar remédio</Text>
                    <Image source={pills} style={addStyles.pillsImage} />

                    <View style={addStyles.inputContainer}>
                        <Text style={addStyles.label}>Nome do remédio</Text>
                        <TextInput
                            style={addStyles.input}
                            placeholder='Ex: Paracetamol, 750mg'
                            value={nomeRemedio}
                            onChangeText={setNomeRemedio}
                        />
                    </View>
                      
                    
                </ScrollView>
            </SafeAreaView>
        );
}

export default AddRemedio;