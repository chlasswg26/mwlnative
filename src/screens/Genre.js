import React, { Fragment } from 'react';
import { Icon, TopNavigation, TopNavigationAction, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { ListItemFourthCustomized } from '../components/ListItemFourthCustomized';
import { styles } from '../styles/Genre';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

const Genre = ({ id }) => {
    const navigation = useNavigation();

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
                subtitle='Daftar buku berdasarkan kategori comedy.'
                alignment='center'
            />
            <Layout
                level='4'
                style={styles.layout}>
                <ScrollView
                    style={styles.layout}
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}>
                        <ListItemFourthCustomized />
                        <ListItemFourthCustomized />
                        <ListItemFourthCustomized />
                        <ListItemFourthCustomized />
                </ScrollView>
            </Layout>
        </Fragment>
    );
};

export default Genre;
