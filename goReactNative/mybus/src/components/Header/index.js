import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {withNavigation } from 'react-navigation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from './styles';

class HeaderCustom extends React.Component {
    render() {
        return (
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
                        position: 'absolute',
                        width: '100%'
                    },
                    textInputContainer: {
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        marginHorizontal: 20,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    },
                    textInput: {
                        height: 54,
                        margin: 0,
                        borderRadius: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginTop: 10,
                        marginLeft: 0,
                        marginRight: 0,
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
        )
    }
}

export default withNavigation(HeaderCustom);
