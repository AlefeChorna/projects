import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import Item from './Item';

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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Item />
                <Item />
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
