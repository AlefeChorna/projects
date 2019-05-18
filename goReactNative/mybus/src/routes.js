import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { 
    createAppContainer, 
    createSwitchNavigator, 
    createDrawerNavigator,
    DrawerItems 
} from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';
import ScreenA from './pages/ScreenA';

const CustomDrawerComponent = _prProps => {
    //console.log('Props: ', _prProps);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 100, alignItems: 'center', backgroundColor: '#FFF', justifyContent: 'center' }}>
                <Icon name="bitcoin" size={50} color="#999" />
            </View>
            <ScrollView>
                <TouchableOpacity onPress={() => _prProps.navigation.navigate('Main')}>
                    <Text>Tela Main</Text>
                </TouchableOpacity>
                <DrawerItems { ..._prProps } />
            </ScrollView>
        </View>
    );
}

const AppDrawerNavigator = createDrawerNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: ({navigation}) => ({
                title: "Main Screen",
                headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("Main")}>
                                <Icon name="plus" size={30} color="#999" />
                            </TouchableOpacity>
                ),
                headerStyle: { paddingRight: 10, paddingLeft: 15 }
            })
        },
        ScreenA: ScreenA,
    }, {
        initialRouteName: 'Main',
        contentComponent: CustomDrawerComponent
    }
)

const Routes = _prUserLogged => createAppContainer(createSwitchNavigator(
    {
        Login,
        Main: AppDrawerNavigator
    }, {
        initialRouteName: _prUserLogged ? 'Main' : 'Login'
    }
));

export default Routes;