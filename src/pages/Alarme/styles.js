import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create ({
    main: {
      flex: 1,
      backgroundColor: '#fffdf4',
      alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fffdf4',
    },
    title: {
        fontSize: 22,
        fontFamily: 'Nunito_800ExtraBold',
        marginTop: 60,
        textAlign: 'center', 
    },
    backButton: {
        position: 'absolute',
        top: 63,
        right:250,
        width: 80,
        height: 40, 
    },
    card: {
        backgroundColor: '#CAD7FA',
        padding: 10,
        borderRadius: 12,
        marginTop: 15,
        width: width - 55,
        alignSelf: 'center',
        height: 80,
    },
    nomeRemedio: {
        fontSize: 18,
        fontFamily: 'Nunito_800ExtraBold',
    },
    horario: {
        fontSize: 16,
        fontFamily: 'Nunito_500Medium',
    },
    sectionHeader: {
        fontSize: 30,
        fontFamily: 'Nunito_800ExtraBold',
        marginTop: 40,
        textAlign: 'center',
    },

    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Nunito_800ExtraBold',
        textAlign: 'center',
    },
    switch: {
        marginTop: -50,
        width: 40,
        height: 40,
        left: width - 120,
    },
    editButton: {
        width: 40,
        height: 40,
        left: width - 113,
    },
    alarmButton: {
    position: 'absolute',
    top: 60,
    left : 300,
    width: 80,
    height: 40,
    },
    sectionList: {
    backgroundColor: '#fffdf4', // ou qualquer cor que quiser
    paddingBottom: 20,
    },
});