import React, { useContext, useState } from 'react';
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
import addStyles from './styles'
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

//meu arquivo context
import {RemedioContext} from '../../Contexts/RemedioContext';

const image = require('../../images/Group 3 (1).png');
const pills = require('../../images/AddPillsImage.png');

const AddRemedio = () => {
    const navigation = useNavigation();
    const {adicionarRemedio} = useContext(RemedioContext);

    //estados dos inputs
    const [nomeRemedio, setNomeRemedio] = useState('');
    const [dosagem, setDosagem] = useState('');
    const [frequencia, setFrequencia] = useState('1x por dia');
    const [hora, setHora] = useState(new Date());
    const [dataInicio, setDataInicio] = useState(new Date());
    const [tipo, setTipo] = useState('');
    const [duracao, setDuracao] = useState('');

    const [showHora, setShowHora] = useState(false);
    const [showData, setShowData] = useState(false);

    //função para salvar o remédio pro context
    const salvarRemedio = () => {
        if (!nomeRemedio || !dosagem) return;

        const duracaoEmDias = parseInt(duracao); // você precisa ter esse estado
        const fim = new Date(dataInicio);
        fim.setDate(fim.getDate() + duracaoEmDias);

        const novoRemedio = {
            nome: nomeRemedio,
            dosagem,
            frequencia, 
            hora: hora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            dataInicio: dataInicio.toLocaleDateString(),
            dataFim: fim.toLocaleDateString(),
            tipo,
            duracao,
        };

        adicionarRemedio(novoRemedio);
        navigation.navigate('ListaRemedio');
    };

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
                            <Text style={addStyles.label}>Duração (dias)</Text>
                            <TextInput
                                style={addStyles.input}
                                placeholder='Ex: 7'
                                value={duracao}
                                onChangeText={setDuracao}
                            />
                        </View>

                        <View style={addStyles.inputContainer}>
                            <Text style={addStyles.label}>Frequência</Text>
                            <Picker
                            selectedValue={frequencia}
                            onValueChange={setFrequencia}
                            style={addStyles.input}
                            mode="dropdown"
                            >
                                <Picker.Item label="1x ao dia" value="1x ao dia" />
                                <Picker.Item label="2x ao dia" value="2x ao dia" />
                                <Picker.Item label="A cada 6 horas" value="6h" />
                                <Picker.Item label="A cada 8 horas" value="8h" />
                                <Picker.Item label="A cada 12 horas" value="12h" />
                            </Picker>
                        </View>

                        <View style={addStyles.inputContainer}>
                            <Text style={addStyles.label}>Tipo de remédio</Text>
                            <Picker
                            selectedValue={tipo}
                            onValueChange={setTipo}
                            style={addStyles.input}
                            mode="dropdown"
                            >
                                <Picker.Item label="Comprimido" value="Comprimido" />
                                <Picker.Item label="Cápsula" value="Cápsula" />
                                <Picker.Item label="Xarope" value="Xarope" />
                                <Picker.Item label="Injeção" value="Injeção" />
                                <Picker.Item label="Inalador" value="Inalador" />
                            </Picker>
                        </View>

                        <TouchableOpacity style={addStyles.saveButton} onPress={salvarRemedio}>
                            <Text style={addStyles.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        );
}

export default AddRemedio;