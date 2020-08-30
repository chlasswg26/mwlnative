import React, { Fragment } from 'react';
import { List, Divider, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import ListItemSecondCustomized from '../components/ListItemSecondCustomized';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const Genre = ({ id }) => {
    const navigation = useNavigation();
    const dataTwo = new Array(8).fill({
        title: 'Title for Item',
        description: 'Description for Item',
    });

    const BackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => navigation.goBack()}
        />
    );

    return (
        <Fragment>
            <TopNavigation
                accessoryLeft={BackAction}
                title='Comedy'
                subtitle='Daftar buku berdasarkan aliran comedy.'
                alignment='center'
            />
            <List
                data={dataTwo}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ListItemSecondCustomized item={item} />}
                ItemSeparatorComponent={() => <Divider />}
            />
        </Fragment>
    );
};

export default Genre;
