import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fffdf4',
    },
    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        marginTop:20,
        bottom: 170
    },
    titleYellow: {
        color: '#FFA726',
        fontFamily: 'Nunito_800ExtraBold',
    },
    bodyText: {
        fontFamily: 'Nunito_500Medium',
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        bottom: 150,
        paddingHorizontal: 14
    },
    pillsImage: {
        flex: 1,
        alignSelf: 'center',
        width: 300,
        resizeMode: 'contain',
        bottom: 30,
    },
    button: {
        backgroundColor: '#FFA726',
        width: 230,
        height: 55,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 120,
    },
    buttonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 18,
        color: '#fffdf4',
    }
});

