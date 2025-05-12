import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create ({
    main: {
      flex: 1,
      backgroundColor: '#fffdf4',
      alignItems: 'center',
    },
    list: {
        paddingBottom: 20,
        fontFamily: 'Nunito_500Medium',
    },
    title: {
        fontSize: 22,
        fontFamily: 'Nunito_800ExtraBold',
        marginTop: 60,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#CAD7FA',
        padding: 12,
        borderRadius: 12,
        marginTop: 15,
        width: width - 55,
    },
    name: {
        fontSize: 18,
        fontFamily: 'Nunito_800ExtraBold',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Nunito_700Bold',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Nunito_500Medium',
    },
    backButton: {
        position: 'absolute',
        top: 63,
        right:250,
        width: 80,
        height: 40, 
    },
    sectionHeader: {
        fontSize: 22,
        fontFamily: 'Nunito_800ExtraBold',
        marginTop: 40,
        textAlign: 'center',
    },
    tipoImagem: {
        width: 70,
        height: 70,
        position: 'absolute',
        top: 10,
        right: 5,
        resizeMode: 'contain',
    },
});