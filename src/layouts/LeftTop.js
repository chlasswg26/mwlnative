import React, { Fragment } from 'react';
import {
    Icon,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const MenuIcon = (props) => {
    return <Icon {...props} name='menu-2' />;
};

const SearchIcon = (props) => {
    return <Icon {...props} name='search' />;
};

const LeftTop = () => {
    const navigation = useNavigation();

    const LeftMenu = () => {
        return (
            <TopNavigationAction
                icon={MenuIcon}
                appearance='default'
                onPress={() => navigation.toggleDrawer()}
            />
        );
    };

    const RightMenu = () => {
        return (
            <TopNavigationAction
                icon={SearchIcon}
                appearance='default'
                onPress={() => navigation.navigate('Search')}
            />
        );
    };

    const HeaderBar = () => {
        return (
            <TopNavigation
                accessoryLeft={LeftMenu}
                accessoryRight={RightMenu}
                title='Beranda'
                alignment='center'
            />
        );
    };
    
    return (
        <Fragment>
            <HeaderBar />
        </Fragment>
    );
};

export default LeftTop;
