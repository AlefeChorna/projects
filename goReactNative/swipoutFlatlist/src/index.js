import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

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
            { id: 7, title: 'Tarefa: 7' },
            { id: 8, title: 'Tarefa: 8' },
            { id: 9, title: 'Tarefa: 9' },
            { id: 10, title: 'Tarefa: 10' },
            { id: 11, title: 'Tarefa: 11' },
            { id: 12, title: 'Tarefa: 12' },
            { id: 13, title: 'Tarefa: 13' },
            { id: 14, title: 'Tarefa: 14' },
            { id: 15, title: 'Tarefa: 15' }
        ],
        refreshing: false,
    }

    renderListItem = ({ item }) => <Item task={item} />

    renderList = () => {
      const { data, refreshing } = this.state;
  
      return (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={() => {}}
          refreshing={refreshing}
        />
      );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>My tasks</Text>
                { this.renderList() }
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
