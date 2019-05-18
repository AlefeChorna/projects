import React, { Component } from 'react';
import { 
  View, 
  StatusBar, 
  Image, 
  Text, 
  TextInput,
  TouchableOpacity 
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

export default class Login extends Component {
  state={
    username: '',
    password: '',
  }

  checkUser = async () => {
    await AsyncStorage.setItem('@MyBus:username', this.state.username);

    this.props.navigation.navigate('Main');
  }

  render() {
    const { username, password, } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
        <Image
          style={styles.imageLogo} 
          resizeMode="contain" 
          source={require('../../assets/logo-gtc.png')} />
        
        <View style={styles.form}>
          <Text style={styles.labelInput}>Username</Text>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="previous"
                    onSubmitEditing={ () => this.password.focus() }
                    blurOnSubmit={false}
                    underlineColorAndroid={"none"}
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
                    underlineColorAndroid={"none"}
                    value={password}
                    onChangeText={text => this.setState({ password: text })} 
                    onSubmitEditing={this.checkUser}/>
            </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.checkUser}>
            <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
