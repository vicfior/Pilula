import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fffdf4',
    },
    scrollContent: {
        paddingVertical: 30,
        gap: 20, 
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        marginTop:50,
    },
    pillsImage: {
        alignSelf: 'center',
        width: 200,
        resizeMode: 'contain',
        marginTop: -160,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -145
    },
    button: {
        backgroundColor: '#FFA726',
        width: 230,
        height: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 18,
        color: '#fffdf4',
    }
});