import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

const Routes = _prUserLogged => createAppContainer(createSwitchNavigator(
    {
        Login,
        Main 
    }, {
        initialRouteName: _prUserLogged ? 'Main' : 'Login'
    }
));

export default Routes;