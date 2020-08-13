import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

const { Navigator, Screen } = createStackNavigator();
import Splash from './screens/Splash';
import Intro from './screens/Intro';
import Connection from './screens/Connection';
import Login from './screens/auth/Login';
import Dashboard from './screens/Dashboard';

const Drawer = createDrawerNavigator();

import { DrawerContent } from './components/DrawerContent';

const DrawerLayout = () => {
    return (
        <Drawer.Navigator
            openByDefault={false}
            drawerContent={props => <DrawerContent {...props} />}
            drawerType='front'
            screenOptions={{
                swipeEnabled: false,
                gestureEnabled: false,
            }}>
            <Drawer.Screen name='Dashboard' component={Dashboard} />
        </Drawer.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}} initialRouteName={Splash}>
                <Fragment>
                    <Screen name='Splash' component={Splash} />
                    <Screen name='Intro' component={Intro} />
                    <Screen name='Connection' component={Connection} />
                    <Screen name='Login' component={Login} />
                    <Screen name='Home' component={DrawerLayout} />
                    {/* <Screen name='Register' component={Register} />
                    <Screen name='Verify' component={Verify} /> */}
                    {/* <Screen name='Dashboard' component={Dashboard} /> */}
                </Fragment>
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
