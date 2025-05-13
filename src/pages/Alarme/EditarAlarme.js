import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AlarmeContext } from '../../Contexts/AlarmeContext';
import styles from './stylesEditar'; // Arquivo de estilo separado

const EditarAlarme = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { alarme } = route.params;
  const { editarAlarme } = useContext(AlarmeContext);

  const [nome, setNome] = useState(alarme.nomeRemedio);
  const [hora, setHora] = useState(alarme.hora);

  const salvarEdicao = () => {
    editarAlarme(alarme.id, {
      nomeRemedio: nome,
      hora: hora,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Editar Alarme</Text>

      <Text style={styles.label}>Nome do Remédio</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Ex: Paracetamol"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Horário</Text>
      <TextInput
        style={styles.input}
        value={hora}
        onChangeText={setHora}
        placeholder="Ex: 08:00"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.botaoSalvar} onPress={salvarEdicao}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditarAlarme;
