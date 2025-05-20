import React, { useContext } from 'react';
import { 
    View, 
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import {ArrowLeft} from 'phosphor-react-native';

//imagens
import capsulaImagem from '../../images/capsula.png'
import comprimidoImagem from '../../images/comprimido.png'
import xaropeImagem from '../../images/xarope.png'
import injecaoImagem from '../../images/injecao.png'
import inaladorImagem from '../../images/inalador.png'

import { RemedioContext } from '../../Contexts/RemedioContext';

const ListaRemedio = () => {
    const navigation = useNavigation();
    const {remedios} = useContext(RemedioContext);

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

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.hora}>{item.hora}</Text>
            <Image source={getTipoImagem(item.tipo)} style={styles.tipoImagem} />
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.text}>{item.dosagem}</Text>
            <Text style={styles.text}>Início: {item.dataInicio}</Text>
            <Text style={styles.text}>Fim: {item.dataFim}</Text>
            <Text style={styles.text}>Duração: {item.duracao} dias</Text>
            <View style={styles.row}>
                <Text style={styles.frequencia}>{item.frequencia}</Text>
                <Text style={styles.tipo}> {item.tipo}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.main}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Menu')}>
                <ArrowLeft size={30} weight="bold" color="#4C4C4C" />
            </TouchableOpacity>
            <Text style={styles.title}>Seus Remédios</Text>
            
            <FlatList
                data={remedios}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <Text style={styles.empty}>Nenhum remédio cadastrado</Text>
                }
            />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddRemedio')}>
                <Text style={styles.buttonText}>Adicionar novo remédio</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ListaRemedio;