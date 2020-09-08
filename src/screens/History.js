import React, { Fragment } from 'react';
import { List, Divider, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import ListItemSecondCustomized from '../components/ListItemSecondCustomized';

const MenuIcon = (props) => (
    <Icon {...props} name='menu-2' />
);

const History = () => {
    const navigation = useNavigation();
    const dataTwo = new Array(8).fill({
        title: 'Title for Item',
        description: 'Description for Item',
    });

    const MenuAction = () => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={() => navigation.toggleDrawer()}
        />
    );

    return (
        <Fragment>
            <TopNavigation
                accessoryLeft={MenuAction}
                title='Riwayat aktifitas'
                alignment='center'
            />
            <List
                data={dataTwo}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ListItemSecondCustomized item={item} />}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <Divider />}
                initialNumToRender={3}
                onEndReachedThreshold={0.5}
            />
        </Fragment>
    );
};

export default History;
