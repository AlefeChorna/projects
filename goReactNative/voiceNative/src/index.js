import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  StatusBar
} from 'react-native';
import Voice from 'react-native-voice';

import Tts from 'react-native-tts';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
      changeBorderColor: false,
      isSpeeking: false
    };

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  onSpeechStart(e) {
    console.log('Start');
    this.setState({
      started: '√',
      changeBorderColor: true
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: '√'
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value,
      changeBorderColor: false
    });
  }

  async componentDidMount() {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
    );

    if (granted) {
      console.log('Permitido RECORD_AUDIO');
    } else {
      const permission = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );

      if (permission === 'granted') {
        console.log('Granted RECORD_AUDIO');
      } else {
        console.log('Denied RECORD_AUDIO');
      }
    }

    Tts.setDefaultLanguage('pt-BR');
  }

  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: []
    });

    try {
      await Voice.start('pt-BR');
    } catch (e) {
      console.error(e);
    }
  }

  _speech() {
    if (this.state.results.length > 0) {
      Tts.speak(String(this.state.results[0]));
    } else {
      Tts.speak('Nenhum comando de voz realizado');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
        <Text style={styles.text}>Fale ou Escute</Text>
        <View style={styles.containerResult}>
          <Text style={styles.textResult}>
            {this.state.results.length === 0
              ? 'Fale alguma coisa para visualizar'
              : ''}
          </Text>
          {this.state.results.map((result, index) => {
            if (index === 0) {
              return (
                <Text style={styles.textResult} key={index}>
                  {result}
                </Text>
              );
            }
          })}
        </View>
        <TouchableOpacity
          style={{
            ...styles.transcript,
            borderColor: this.state.changeBorderColor ? 'red' : 'purple'
          }}
          onPress={this._startRecognition.bind(this)}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: this.state.changeBorderColor ? 'red' : '#888'
            }}
          >
            Começar a falar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.transcript}
          onPress={this._speech.bind(this)}
        >
          <Text style={styles.buttonText}>Começar a ouvir</Text>
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
    backgroundColor: '#F5FCFF'
  },
  containerResult: {
    width: 300,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#EEE',
    padding: 10,
    borderRadius: 10,
    borderColor: '#DDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textResult: {
    color: '#FF9B61',
    alignItems: 'center',
    fontSize: 18
  },
  transcript: {
    textAlign: 'center',
    marginBottom: 1,
    marginTop: 15,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'purple'
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
    color: '#999',
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 17,
    color: '#888'
  }
});
