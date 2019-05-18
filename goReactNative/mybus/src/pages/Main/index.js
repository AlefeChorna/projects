import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import MapView from 'react-native-maps';

import Header from '../../components/Header';

import styles from './styles';

export default class Main extends Component {
  state={
    region: null,
  }
  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log('Coords: ', latitude, longitude)
        this.setState({ region: {
          latitude: latitude, 
          longitude: longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134 
        }});
      },
      () => console.log('Error'), 
      {
        timeout: 2000,
        enableHighAccuracy: true,
      }
    );
  }
  render() {
    const { region } = this.state;
    return (
      <View style={styles.container}>
          <MapView 
            style={{ flex: 1 }}
            region={region}
            showsUserLocation
            loadingEnabled />

          <StatusBar backgroundColor="#AAA"/>
          <Header />
      </View>
    );
  }
}
