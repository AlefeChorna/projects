import { StyleSheet } from 'react-native';

import { colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    imageLogo: {
        width: 120,
        height: 120,
    },
    form: {
        marginTop: 30,
    },
    labelInput: {
        color: colors.secundary,
        fontWeight: 'bold'
    },
    input: {
        flex: 1,
        color: colors.secundary
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
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default styles;