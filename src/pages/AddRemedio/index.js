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
} from 'react-native';
import {ArrowLeft} from 'phosphor-react-native';
import addStyles from './addStyles';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
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

    const [showHora, setShowHora] = useState(false);
    const [showData, setShowData] = useState(false);

    return (
            <SafeAreaView style={addStyles.main}>
                <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>    
                    <ImageBackground
                        source={image}
                        style={addStyles.imageBackground}
                        resizeMode="cover"
                    >
                    <TouchableOpacity style={addStyles.icon} onPress={() => navigation.navigate('Menu')}>
                        <ArrowLeft size={32} color="white" weight="bold" />
                    </TouchableOpacity>
                    </ImageBackground>
                    <Text style={addStyles.title}>Adicionar remédio</Text>
                    <Image source={pills} style={addStyles.pillsImage} />

                    <View style={addStyles.form}>
                        <View style={addStyles.inputContainer}>
                            <Text style={addStyles.label}>Nome do remédio</Text>
                            <TextInput
                                style={addStyles.input}
                                placeholder='Ex: Paracetamol, 750mg'
                                value={nomeRemedio}
                                onChangeText={setNomeRemedio}
                            />
                        </View>
                        
                        <View style={addStyles.inputContainer}>
                            <Text style={addStyles.label}>Dosagem</Text>
                            <TextInput
                                style={addStyles.input}
                                placeholder='Ex: 2 comprimidos'
                                value={dosagem}
                                onChangeText={setDosagem}
                            />
                        </View>

                        <View style={addStyles.inputContainer}>
                            <Text style={addStyles.label}>Horário</Text>
                            <TouchableOpacity 
                                onPress={() => setShowHora(true)}
                            >
                            <Text style={addStyles.input}>{hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                            </TouchableOpacity>
                            {showHora && (
                                <DateTimePicker
                                    value={hora}
                                    mode="time"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShowHora(false);
                                        if (selectedDate) setHora(selectedDate);
                                    }}
                                />
                            )}
                        </View>

                        <View style={addStyles.inputContainer}>
                            <Text style={addStyles.label}>Data de início</Text>
                            <TouchableOpacity
                                onPress={() => setShowData(true)}
                            >
                            
                            <Text style={addStyles.input}>{dataInicio.toLocaleDateString()}</Text>
                            </TouchableOpacity>
                            {showData && (
                                <DateTimePicker
                                    value={dataInicio}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShowData(false);
                                        if (selectedDate) setDataInicio(selectedDate);
                                    }}
                                />
                            )}
                        </View>

                        <View style={addStyles.inputContainer}>
                            <Text style={addStyles.label}>Frequência</Text>
                            <Picker
                            selectedValue={frequencia}
                            onValueChange={setFrequencia}
                            style={addStyles.input}
                            mode="dropdown"
                            >
                                <Picker.Item label="1x por dia" value="1x por dia" />
                                <Picker.Item label="2x por dia" value="2x por dia" />
                                <Picker.Item label="A cada 6 horas" value="6h" />
                                <Picker.Item label="A cada 8 horas" value="8h" />
                                <Picker.Item label="A cada 12 horas" value="12h" />
                            </Picker>
                        </View>

                        <TouchableOpacity style={addStyles.saveButton}>
                            <Text style={addStyles.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        );
}

export default AddRemedio;