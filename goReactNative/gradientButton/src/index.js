import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
} from 'react-native';

import GradientButton from './Components/GradientButton';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
                <Text style={styles.welcome}>Gradient Buttons</Text>
                <GradientButton
                    buttonProps={{
                        onPress: () => alert('Button Orange')
                    }}
                    gradientProps={{
                        start: { x: 0, y: 0}, 
                        end: { x: 1, y: 0},
                        colors: ['#874f00', '#f5ba57']
                    }} 
                    styleButton={styles.button}
                    styleButtonText={styles.buttonText}
                    textButton="Orange" />

                <GradientButton
                    gradientProps={{
                        start: { x: 0, y: 0}, 
                        end: { x: 1, y: 0},
                        colors: ["#7B42F6", "#B01EFF"]
                    }} 
                    styleButton={styles.button}
                    styleButtonText={styles.buttonText}
                    textButton="Purple Violet" />

                <GradientButton
                    gradientProps={{
                        start: { x: 0, y: 0}, 
                        end: { x: 1, y: 0},
                        colors: ["#B01EFF", "#E1467C"]
                    }} 
                    styleButton={styles.button}
                    styleButtonText={styles.buttonText}
                    textButton="Violet Pink" />
                
                <GradientButton
                    gradientProps={{
                        start: { x: 0, y: 0}, 
                        end: { x: 1, y: 0},
                        colors: ["#E1467C", "#205284"]
                    }} 
                    styleButton={styles.button}
                    styleButtonText={styles.buttonText}
                    textButton="Pink Dark Green" />

                <GradientButton
                    gradientProps={{
                        start: { x: 0, y: 0}, 
                        end: { x: 1, y: 0},
                        colors: ["#3672F8", "#B01EFF"]
                    }} 
                    styleButton={styles.button}
                    styleButtonText={styles.buttonText}
                    textButton="Blue Violet" />

                <GradientButton
                    gradientProps={{
                        start: { x: 0, y: 0}, 
                        end: { x: 1, y: 0},
                        colors: ["#14F1D9", "#3672F8"]
                    }} 
                    styleButton={styles.button}
                    styleButtonText={styles.buttonText}
                    textButton="Blue Marine" />

                <GradientButton
                    gradientProps={{
                        start: { x: 0, y: 0}, 
                        end: { x: 1, y: 0},
                        colors: ["#4F73C3", "#3C46A2"]
                    }} 
                    styleButton={styles.button}
                    styleButtonText={styles.buttonText}
                    textButton="Deep Blue" />

                <GradientButton
                    gradientProps={{
                        start: { x: 0, y: 0}, 
                        end: { x: 1, y: 0},
                        colors: ["#D3D3D3", "#696969"]
                    }} 
                    styleButton={styles.button}
                    styleButtonText={styles.buttonText}
                    textButton="Disabled" />
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
        fontWeight: 'bold',
        margin: 10,
    },
    button: { 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        width: 300, 
        height: 50,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
