import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
    state={
        username: '',
        password: '',
        hasFocusUsername: false,
        hasFocusPassword: false,
    }
    render() {
        const { username, password, hasFocusUsername, hasFocusPassword } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <View style={styles.containerIcon}>
                    <Icon size={65} color="#263238" name="dropbox"/>
                </View>

                <View style={styles.form}>
                    <Text style={styles.labelInput}>Username</Text>
                    <View style={styles.containerInput}>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            autoCorrect={false}
                            selectionColor="#FF4081"
                            returnKeyType="previous"
                            onSubmitEditing={ () => this.password.focus() }
                            blurOnSubmit={false}
                            onFocus={ () => this.setState({ hasFocusUsername: true }) }
                            onBlur={ () => this.setState({ hasFocusUsername: false }) }
                            underlineColorAndroid={ hasFocusUsername ? "#FF4081" : "#11171A" }
                            value={username}
                            onChangeText={text => this.setState({ username: text })} />
                    </View>

                    <Text style={styles.labelInput}>Password</Text>
                    <View style={styles.containerInput}>
                        <TextInput
                            ref={ input => this.password = input}
                            style={styles.input}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            autoCorrect={false}
                            selectionColor="#FF4081"
                            onFocus={ () => this.setState({ hasFocusPassword: true }) }
                            onBlur={ () => this.setState({ hasFocusPassword: false }) }
                            underlineColorAndroid={ hasFocusPassword ? "#FF4081" : "#11171A" }
                            value={password}
                            onChangeText={text => this.setState({ password: text })} />
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#263238',
    },
    containerIcon: {
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80, 
        backgroundColor:"#81C784"
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
