import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

let offset = 0;
const translateX = new Animated.Value(0);

const animetedEvent = Animated.event(
  [
    {
      nativeEvent: {
        translationX: translateX,
      },
    },
  ],
  { useNativeDriver: true },
);

function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
        let opened = false;
        const { translationX, velocityX } = event.nativeEvent;

        offset += translationX;

        console.log('event.nativeEvent: ',  event.nativeEvent);
        if (
            translationX < -60 || 
            (!opened && Math.abs(velocityX) > 1200 && translationX < 0)
        ) {
            opened = true;
        } else {
            translateX.setValue(offset);
            translateX.setOffset(0);
            offset = 0;
        }

        let duration = opened
            ? 150
            : Math.abs(velocityX) > 1200
                ? 150
                : 300;

        Animated.timing(translateX, {
            toValue: opened ? -150 : 0,
            duration: duration,
            useNativeDriver: true,
        }).start(() => {
            offset = opened ? -150 : 0;

            translateX.setOffset(offset);
            translateX.setValue(0);
        });
        }
    }

export default class App extends Component {
    state={
        data: [
            { id: 1, title: 'Tarefa: 1' },
            { id: 2, title: 'Tarefa: 2' },
            { id: 3, title: 'Tarefa: 3' },
            { id: 4, title: 'Tarefa: 4' },
            { id: 5, title: 'Tarefa: 5' },
            { id: 6, title: 'Tarefa: 6' },
            { id: 7, title: 'Tarefa: 7' }
        ]
    }
    renderItem = _prItem => {
        return (
            <View key={_prItem.id} style={styles.containerItem}>
                <View style={styles.viewUnder}>
                    <Text>View Under</Text>
                </View>
                <PanGestureHandler
                    onGestureEvent={animetedEvent}
                    onHandlerStateChange={onHandlerStateChange}>
                    
                    <Animated.View style={styles.viewAbove}>
                        <Text>{_prItem.title}</Text>
                    </Animated.View>
                </PanGestureHandler>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                { this.state.data.map(item => this.renderItem(item))}
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
    containerItem: {
        height: 50,
        width: '100%',
        borderColor: 'red',
        borderWidth: StyleSheet.hairlineWidth
    },
    viewUnder: {
        flex: 1,
        backgroundColor: 'purple'
    },
    viewAbove: {
        height: 50,
        width: '100%',
        backgroundColor: 'green',
        position: 'absolute',
        transform: [{
            translateX: translateX.interpolate({
                inputRange: [-150, 0],
                outputRange: [-150, 0],
                extrapolate: 'clamp'
            }),
        }],
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
