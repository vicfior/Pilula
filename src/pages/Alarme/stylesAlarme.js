import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height} = Dimensions.get('window');

export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fffdf4',
        padding: 20,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 30,
        fontFamily: 'Nunito_800ExtraBold',
        marginBottom: -2,
        textAlign: 'center',
    },
    titleYellow:{
        color: '#FFA726',
        fontFamily: 'Nunito_800ExtraBold',
    },
    image: {
        width: 250,
        height: 280,
        alignSelf: 'center',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: height/6,
    },
    infoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',
    },
    infoCapsula: {
        fontSize: 16,
        fontFamily: 'Nunito_600SemiBold',
        color: '#808080',
        marginTop: 5,
    },
    infoHora: {
        fontSize: 24,
        fontFamily: 'Nunito_800ExtraBold',
        color: 'white',
        backgroundColor: '#FEC94E',
        borderRadius: 20,
        padding: 5,
        width: 100,
        textAlign: 'center',
        marginBottom: 20,
    },
    imagemCheck: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginTop: 30,
    }
});