import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdf4',
        padding: 20,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 30,
        fontFamily: 'Nunito_800ExtraBold',
        marginBottom: 30,
        textAlign: 'center',
        marginTop: 40,
    },
});