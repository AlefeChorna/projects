import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#263238'
    },
    imageLogo: {
        width: 120,
        height: 120,
    },
    form: {
        marginTop: 30,
    },
    labelInput: {
        color: '#607D8B',
        fontWeight: 'bold'
    },
    input: {
        flex: 1,
        color: '#607D8B'
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 45,
        marginBottom: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#81C784',
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 25,
    },
    textButton: {
        color: '#263238',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default styles;