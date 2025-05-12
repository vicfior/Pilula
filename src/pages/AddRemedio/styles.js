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
        transform: [{ translateY: -207 }],
    },
    icon: {
        position: 'absolute',
        top: 61,
        left: 18,
        width: 80,
        height: 40, 
    },
    homeButton: {
        position: 'absolute',
        top: 63,
        left : 300,
        width: 100,
        height: 100,
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
        marginTop: -555,
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
        borderColor: '#C0C0BF',
        borderWidth: 1,
        padding: 10,
        fontFamily: 'Nunito_500Medium',
        fontSize: 16,
        color: '#686868',
        textAlign: 'left',
    },
    form: {
        marginTop: -330,
    },  
    saveButton: {
        backgroundColor: '#FFA726',
        width: 100,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    saveButtonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 18,
        color: '#fffdf4',
    },
});
