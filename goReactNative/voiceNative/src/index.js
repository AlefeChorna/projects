import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  PermissionsAndroid
} from 'react-native';
import Voice from 'react-native-voice';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: []
    };

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  onSpeechStart(e) {
    this.setState({
      started: '√'
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: '√'
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.transcript}>Transcript</Text>
        {this.state.results.map((result, index) => {
          if (index === 0) {
            return (
              <Text style={styles.transcript} key={index}>
                {result}
              </Text>
            );
          }
        })}
        <Button
          style={styles.transcript}
          onPress={this._startRecognition.bind(this)}
          title="Start"
        />
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
  transcript: {
    textAlign: 'center',
    color: '#FF9B61',
    marginBottom: 1
  }
});
