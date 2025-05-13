import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf4',
    padding: 20,
    justifyContent: 'flex-start',
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'Nunito_800ExtraBold',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    height: 45,
    borderColor: '#CAD7FA',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: 'Nunito_500Medium',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  botaoSalvar: {
    backgroundColor: '#FEC94E',
    paddingVertical: 12,
    borderRadius: 40,
    marginTop: 30,
    alignItems: 'center',
    width: width - 250,
    alignSelf: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito_800ExtraBold',
  },
});
