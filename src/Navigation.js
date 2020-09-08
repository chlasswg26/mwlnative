import React, { Fragment, useEffect } from 'react';
import { useWindowDimensions, Alert, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

const { Navigator, Screen } = createStackNavigator();
import Splash from './screens/Splash';
import Intro from './screens/Intro';
import Connection from './screens/Connection';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Verify from './screens/auth/Verify';
import Dashboard from './screens/Dashboard';
import Search from './screens/Search';
import Genre from './screens/Genre';
import Book from './screens/Book';
import Detail from './screens/Detail';
import History from './screens/History';
import Profile from './screens/Profile';

const Drawer = createDrawerNavigator();

import { DrawerContent } from './components/DrawerContent';

const DrawerLayout = () => {
    const { height, width } = useWindowDimensions();
    
    useEffect(() => {
        if (width > height) {
            return Alert.alert(
                'Peringatan!',
                'Aplikasi ini tidak mendukung posisi horizontal.',
                [{ text: 'Tutup', onPress: () => BackHandler.exitApp() }],
                { cancelable: false }
            );
        }
    }, [height, width]);

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
            <Drawer.Screen name='Search' component={Search} />
            <Drawer.Screen name='Genre' component={Genre} />
            <Drawer.Screen name='Book' component={Book} />
            <Drawer.Screen name='Detail' component={Detail} />
            <Drawer.Screen name='History' component={History} />
            <Drawer.Screen name='Profile' component={Profile} />
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
                    <Screen name='Register' component={Register} />
                    <Screen name='Home' component={DrawerLayout} />
                    <Screen name='Verify' component={Verify} />
                    {/* <Screen name='Dashboard' component={Dashboard} /> */}
                </Fragment>
            </Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
