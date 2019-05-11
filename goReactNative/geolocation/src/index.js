import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar, 
    PermissionsAndroid 
} from 'react-native';

export default class App extends Component {
    state={
        latitude: 0,
        longitude: 0,
    }

    formatGeolocation = _prCoords => {
        let latitude = 0;
        let longitude = 0;

        if (_prCoords) {
            latitude = String(_prCoords.latitude).split('.');
            latitude = latitude[0] + '.' + latitude[1].substring(0, 5);

            longitude = String(_prCoords.longitude).split('.');
            longitude = longitude[0] + '.' + longitude[1].substring(0, 5);
        } 

        this.setState({ 
            latitude: Number(latitude), 
            longitude: Number(longitude) 
        });
    }

    getGeolocation = () => {
        navigator.geolocation.getCurrentPosition(
            success => this.formatGeolocation(success.coords),
            error => this.formatGeolocation(),
            { enableHighAccuracy: true, timeout: 10000 }
        );
    }

    async componentDidMount() {
        const geolocationGranted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (geolocationGranted) {
            this.getGeolocation();
        } else {
            const request = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );

            if (request === "granted") {
                this.getGeolocation();
            } else {
                console.log('Permission denied: ', request);
            }
        }
    }

    render() {
        const { latitude, longitude } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent barStyle="dark-content"/>
                <Text style={styles.welcome}>Latitude: { latitude }</Text>
                <Text style={styles.welcome}>Longitude: { longitude }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
});
