import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {withNavigation } from 'react-navigation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';

class HeaderCustom extends React.Component {
    render() {
        return (
            <View 
                style={{ 
                    position:'absolute',
                    height: 45,
                    elavation: 5,
                    width: '90%',
                    left: '5%',
                    backgroundColor: '#CCC',
                    top: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 5
                }}>
                <TouchableOpacity
                    style={{ marginLeft: 10 }} 
                    onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name="bars" size={25} color="#FFF" />
                </TouchableOpacity>
                <GooglePlacesAutocomplete 
                placeHolder="Para onde?"
                onPress={() => {}}
                query={{
                    key: 'AIzaSyCvjRHqF9_LVWEMiBcN_UEWKOis7ivbGrU',
                    language: 'pt'
                }}
                textInputProps={{
                    autoCapitalize: "none",
                    autoCorrect: false
                }}
                fetcgDetails
                placeHolderTextvolor="#333"
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        width: '70%',
                        top: -7.8,
                    },
                    textInputContainer: {
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 45,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                    textInput: {
                        height: 45,
                        borderRadius: 0,
                        paddingRight: 20,
                        elavation: 5,
                        shawdowColor: '#000',
                        shawdowOpacity: 0.1,
                        shawdowOffset: { x: 0, y: 0 },
                        shawdowRadius: 15,
                        borderWidth: 1,
                        borderColor: '#DDD',
                        fontSize: 18
                    },
                    listView: {
                        borderWidth: 1,
                        position: 'absolute',
                        top: 70,
                        borderColor: '#DDD',
                        backgroundColor: '#FFF',
                        marginHorizontal: 20,
                        elavation: 5,
                        shawdowColor: '#000',
                        shawdowOpacity: 0.1,
                        shawdowOffset: { x: 0, y: 0 },
                        shawdowRadius: 15,
                        marginTop: 10,
                    },
                    description: {
                        fontSize: 16,
                    },
                    row: {
                        padding: 20,
                        height: 58
                    }
                }}/>
            </View>
        )
    }
}

export default withNavigation(HeaderCustom);
