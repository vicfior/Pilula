import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffdf4',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#FFA726',
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        color: '#000',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 30,
    },
    userName: {
        fontFamily: 'Nunito_800ExtraBold',
        fontSize: 24,
        color: '#000',
        marginTop: 10,
    },
    userEmail: {
        fontFamily: 'Nunito_500Medium',
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        color: '#000',
        marginBottom: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#FFA726',
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#FFA726',
    },
    optionTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    optionTitle: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        color: '#000',
        marginBottom: 4,
    },
    optionDescription: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 14,
        color: '#666',
    },
    signOutButton: {
        borderColor: '#FF5252',
        marginTop: 20,
    },
    signOutText: {
        color: '#FF5252',
    },
    infoContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#FFA726',
    },
    infoLabel: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    infoValue: {
        fontFamily: 'Nunito_500Medium',
        fontSize: 16,
        color: '#000',
    },
    editButton: {
        backgroundColor: '#FFA726',
        margin: 20,
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    editButtonText: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        color: '#fffdf4',
    },
    input: {
        fontFamily: 'Nunito_500Medium',
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fffdf4',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFA726',
    },
    editButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    cancelButton: {
        backgroundColor: '#666',
        flex: 1,
        marginRight: 10,
    },
}); 