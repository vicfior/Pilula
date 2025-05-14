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
        marginTop: height/4,
    },
});