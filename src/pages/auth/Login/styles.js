import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdf4',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    title: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 32,
        color: '#FFA726',
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: 'Nunito_500Medium',
        fontSize: 16,
        color: '#666',
    },
    form: {
        width: '100%',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        color: '#000',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        fontSize: 16,
        fontFamily: 'Nunito_500Medium',
        color: '#000',
        borderWidth: 1,
        borderColor: '#FFA726',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    inputError: {
        borderColor: '#FF5252',
    },
    errorText: {
        fontFamily: 'Nunito_500Medium',
        fontSize: 14,
        color: '#FF5252',
        marginTop: 5,
    },
    button: {
        backgroundColor: '#FFA726',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: '#fffdf4',
    },
    registerButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    registerButtonText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        color: '#FFA726',
    },
    successMessage: {
        backgroundColor: '#4CAF50',
        borderRadius: 15,
        padding: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    successText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        color: '#fffdf4',
    },
}); 