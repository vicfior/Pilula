import React, { useContext } from 'react';
import { 
    View, 
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    SectionList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { RemedioContext } from '../../Contexts/RemedioContext';
import {ArrowLeft, HouseSimple} from 'phosphor-react-native';

//imagens
import capsulaImagem from '../../images/capsula.png'
import comprimidoImagem from '../../images/comprimido.png'
import xaropeImagem from '../../images/xarope.png'
import injecaoImagem from '../../images/injecao.png'
import inaladorImagem from '../../images/inalador.png'

const gerarHorarios = (horaInicial, frequencia, duracao) => { 
        const horarios = [];
        const horaBase = new Date();
        const [hora, minuto] = horaInicial.split(':').map(Number);
        horaBase.setHours(hora);
        horaBase.setMinutes(minuto);

        let intervaloHoras;
        switch (frequencia) {
            case '2x ao dia':
                intervaloHoras = 12;
                break;
            case '6h':
            case 'A cada 6 horas':
                intervaloHoras = 6;
                break;
            case '8h':
            case 'A cada 8 horas':
                intervaloHoras = 8;
                break;
            case '12h':
            case 'A cada 12 horas':
                intervaloHoras = 12;
                break;
            default:
                intervaloHoras = 24;
        }

        for (let dia = 0; dia < duracao; dia++ ) {
            const dataBase = new Date();
            dataBase.setHours(0, 0, 0, 0); 
            dataBase.setDate(dataBase.getDate() + dia);

            const qtd = Math.floor(24 / intervaloHoras);  
            
            for(let i = 0; i < qtd; i++) {
                const horario = new Date(dataBase);
                horario.setHours(hora + i * intervaloHoras, minuto, 0, 0); 
                horarios.push({
                    dia: dataBase.toLocaleDateString(),
                    hora: horario.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                });

            }

        }

        return horarios;
};

const ListaHorarios = () => {
    const { remedios } = useContext(RemedioContext);
    const navigation = useNavigation();
    
    //agrupa os horários
    const todosHorarios = remedios.flatMap(remedio => {
        const horarios = gerarHorarios(
            remedio.hora,
            remedio.frequencia,
            parseInt(remedio.duracao)
        );
        return horarios.map(h => ({
            nome: remedio.nome,
            tipo: remedio.tipo,
            ...h
        }));
    });

    //agrupa os dias
    const agrupaDia = todosHorarios.reduce((acc, item) => {
        const dia = item.dia;
        const existente = acc.find(grupo => grupo.title === dia);
        if (existente) {
            existente.data.push(item);
        } else {
            acc.push({
                title: dia,
                data: [item]
            });
        }
        return acc;
    }, []);

    const getTipoImagem = (tipo) => {
            switch (tipo) {
                case 'Cápsula' : return capsulaImagem;
                case 'Comprimido' : return comprimidoImagem;
                case 'Xarope' : return xaropeImagem;
                case 'Injeção' : return injecaoImagem;
                case 'Inalador' : return inaladorImagem;
                default: return comprimidoImagem;
            }
    };

    return (
        <SafeAreaView style={styles.main}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <ArrowLeft size={30} color="#4C4C4C" weight="bold" />
            </TouchableOpacity>
            <Text style={styles.title}>Horários</Text>

            <SectionList
                sections={agrupaDia}
                keyExtractor={(_, index) => index.toString()}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={getTipoImagem(item.tipo)} style={styles.tipoImagem} />
                        <Text style={styles.name}>{item.nome}</Text>
                        <Text style={styles.subtitle}>{item.tipo}</Text>
                        <Text style={styles.text}>Horário: {item.hora}</Text>
                    </View>
                )}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

export default ListaHorarios;