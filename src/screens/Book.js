import React, { Fragment } from 'react';
import { ListItemFourthCustomized } from '../components/ListItemFourthCustomized';
import { TopNavigation, Icon, TopNavigationAction, Layout } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { styles } from '../styles/Book';

const MenuIcon = (props) => (
    <Icon {...props} name='menu-2' />
);

const Book = () => {
    const navigation = useNavigation();
    
    const MenuAction = () => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={() => navigation.toggleDrawer()}
        />
    );

    return (
        <Fragment>
            <TopNavigation
                title='Buku saya'
                subtitle='Daftar buku yang dipinjam.'
                alignment='center'
                accessoryLeft={MenuAction}
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

export default Book;
