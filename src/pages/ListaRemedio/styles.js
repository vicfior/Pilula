import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fffdf4',
      alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontFamily: 'Nunito_800ExtraBold',
        marginTop: 60,
        textAlign: 'center',
    },
    list: {
        paddingBottom: 20,
        fontFamily: 'Nunito_500Medium',
    },
    empty: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
        color: '#999',
    },
    card: {
        backgroundColor: '#CAD7FA',
        padding: 12,
        borderRadius: 12,
        marginTop: 15,
        width: width - 40,
    },
    name: {
        fontSize: 18,
        fontFamily: 'Nunito_800ExtraBold',
    },
    hora: {
        fontSize: 12,
        fontFamily: 'Nunito_500Medium',
        color: '#808080',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Nunito_500Medium',
    },
    frequencia: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 14,
        backgroundColor: '#FFA230',
        color: '#fff',
        width: 90,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 10,
        paddingVertical: 2,
        marginRight: 10
    },
    tipo: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 14,
        backgroundColor: '#5B4A8B',
        color: '#fff',
        width: 90,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 5,
        paddingVertical: 2
    },
    row: {
        flexDirection: 'row',
    },
    backButton: {
        position: 'absolute',
        top: 63,
        right:150,
        width: 80,
        height: 40, 
    },
    button: {
        backgroundColor: '#FFA726',
        width: 160,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Nunito_800ExtraBold',
        textAlign: 'center',
    },
    tipoImagem: {
        width: 110,
        height: 120,
        position: 'absolute',
        top: 10,
        right: 5,
        resizeMode: 'contain',
    },  
    homeButton: {
        position: 'absolute',
        top: 63,
        left:200,
        width: 80,
        height: 40, 
    },

})