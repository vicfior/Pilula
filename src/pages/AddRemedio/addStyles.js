import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fffdf4',
    },
    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 23,
        color: 'white',
        textAlign: 'center',
        bottom: 205
    },
    icon: {
        position: 'absolute',
        top: 61,
        left: 18,
        width: 80,
        height: 40, 
    },
    imageBackground: {
        width: width,
        alignSelf: 'center',
        height: 268, 
    },
    pillsImage: {
        alignSelf: 'center',
        width: 130,
        resizeMode: 'contain',
        bottom: 555,
        left: 3
    },
    inputContainer: {
        marginHorizontal: 14,
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        fontFamily: 'Nunito_500Medium',
        fontSize: 18,
        color: '#000',
        textAlign: 'left',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: '#000',
        padding: 16,
        fontFamily: 'Nunito_500Medium',
        fontSize: 16,
        color: '#000',
        textAlign: 'left',
    },
});
