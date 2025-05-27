import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFFBEA',
        padding: 23,
    },
    title: {
        fontSize: 26,
        fontFamily: 'Nunito_800ExtraBold',
        marginTop: height * 0.04,
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
    },
    semRegistros: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginTop: 40,
        fontFamily: 'Nunito_500Medium',
    },
    nome: {
        fontSize: 20,
        fontFamily: 'Nunito_700Bold',
        color: '#444',
    },
    tipo: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'Nunito_600SemiBold',
    },
    hora: {
        fontSize: 16,
        color: '#888',
        fontFamily: 'Nunito_500Medium'
    },
    data: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Nunito_500Medium'
    },
    button: {
        backgroundColor: '#FFA726',
        width: 160,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        alignSelf: 'center',
        marginBottom: 20
    },
    buttonText: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 16,
        color: '#fffdf4',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 13,
        backgroundColor: '#CAD7FA',
        borderRadius: 10,
        marginVertical: 6,
        marginHorizontal: 16,
    },

    tipoImagem: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: 5,
        resizeMode: 'contain',
    },

    itemContent: {
        flex: 1,
    },
});
