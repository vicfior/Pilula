import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useHistorico } from '../../Contexts/HistoricoContext';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

//imagens
import capsulaImagem from '../../images/capsula.png';
import comprimidoImagem from '../../images/comprimido.png';
import xaropeImagem from '../../images/xarope.png';
import injecaoImagem from '../../images/injecao.png';
import inaladorImagem from '../../images/inalador.png';

const getTipoImagem = (tipo) => {
  switch (tipo) {
    case 'Cápsula': return capsulaImagem;
    case 'Comprimido': return comprimidoImagem;
    case 'Xarope': return xaropeImagem;
    case 'Injeção': return injecaoImagem;
    case 'Inalador': return inaladorImagem;
    default: return comprimidoImagem;
  }
};

const Historico = () => {
  const { administrados } = useHistorico();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Histórico de Remédios</Text>

      {administrados.length === 0 ? (
        <Text style={styles.semRegistros}>Nenhum remédio foi marcado como administrado ainda.</Text>
      ) : (
        <FlatList
          data={administrados}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
                <View style={styles.itemContent}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.tipo}>{item.tipo}</Text>
                <Text style={styles.hora}>{item.hora}</Text>
                <Text style={styles.data}>{item.data}</Text>
                </View>
                <Image source={getTipoImagem(item.tipo)} style={styles.tipoImagem} />
            </View>
            )}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>Voltar ao Menu</Text>         
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Historico;
