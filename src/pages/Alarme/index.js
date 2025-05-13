import React, { useContext } from 'react';
import { 
    View, 
    Text, 
    SafeAreaView, 
    TouchableOpacity, 
    Image, 
    FlatList,
    Switch,
    SectionList 
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {ArrowLeft, HouseSimple, PencilSimple, BellRinging} from 'phosphor-react-native';
import { RemedioContext } from '../../Contexts/RemedioContext';
import {AlarmeContext} from '../../Contexts/AlarmeContext';

const Alarme = () => {
    const navigation = useNavigation();
    const { alarmes, alternarAtivacao } = useContext(AlarmeContext);

    const AlarmeItem = ({ item }) => (
        <View style={styles.card}>
            <View>
                <Text style={styles.nomeRemedio}>{item.nomeRemedio}</Text>
                <Text style={styles.horario}>{item.hora}</Text>
            </View>
            <Switch
                value={item.ativo}
                onValueChange={() => alternarAtivacao(item.id)}
                style={styles.switch}
                thumbColor="#FEA330" //cor bolinha
                trackColor={{
                    false: '#EEECF8', //cor desligado
                    true: '#FEA330', //cor ligado
                }}
            />

            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditarAlarme', { alarme: item })}>
                <PencilSimple size={20} color="#5B4A8B" weight="bold" />
            </TouchableOpacity>
        </View>
    );

    const agrupaDia = alarmes.reduce((acc, item) => {
        const dia = item.data;
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

    return (
        <SafeAreaView styles={styles.main}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Menu')}>
                    <ArrowLeft size={30} color="#4C4C4C" weight="bold" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.alarmButton} onPress={() => navigation.navigate('AlarmeTela')}>
                    <BellRinging size={30} color="#4C4C4C" weight="bold" />
                </TouchableOpacity>
                <Text style={styles.title}>Seus Alarmes</Text>
            </View>

            <SectionList
                sections={agrupaDia}
                renderItem={({ item }) => <AlarmeItem item={item} />}
                renderSectionHeader={({ section }) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                    </View>
                )}
                style={styles.sectionList}
            />
            
        </SafeAreaView>
    );
}

export default Alarme;
