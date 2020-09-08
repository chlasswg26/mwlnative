import React, { Fragment, useState } from 'react';
import { List, Divider, Icon, TopNavigation, TopNavigationAction, Layout, Input, OverflowMenu, MenuItem } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import ListItemFirstCustomized from '../components/ListItemFirstCustomized';
import { TouchableWithoutFeedback } from 'react-native';
import { styles } from '../styles/Search';
import FWIcon from 'react-native-vector-icons/FontAwesome';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);
const FilterIcon = (props) => (
    <Icon {...props} name='funnel-outline' />
);
const AscendingIcon = () => (
    <FWIcon name='sort-alpha-asc' />
);
const DescendingIcon = () => (
    <FWIcon name='sort-alpha-desc' />
);

const Search = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [visible, setVisible] = useState('');
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

    const FilterMenu = () => (
        <TopNavigationAction
            icon={FilterIcon}
            onPress={() => setVisible(true)}
        />
    );

    const onItemSelect = (index) => {
        setSelectedIndex(index);
        setVisible(false);
    };

    const FilterAction = () => (
        <OverflowMenu
            anchor={FilterMenu}
            backdropStyle={styles.filterBackdrop}
            visible={visible}
            selectedIndex={selectedIndex}
            onSelect={onItemSelect}
            onBackdropPress={() => setVisible(false)}>
            <MenuItem title='Judul (A-Z)' accessoryLeft={AscendingIcon} />
            <MenuItem title='Judul (Z-A)' accessoryLeft={DescendingIcon} />
            <MenuItem title='Pengarang (A-Z)' accessoryLeft={AscendingIcon} />
            <MenuItem title='Pengarang (Z-A)' accessoryLeft={DescendingIcon} />
        </OverflowMenu>
    );

    const renderSearchIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => console.log('pressed')}>
            <Icon {...props} name='search' />
        </TouchableWithoutFeedback>
    );

    return (
        <Fragment>
            <Layout style={styles.flexBox}>
                <TopNavigation
                    accessoryLeft={BackAction}
                    accessoryRight={FilterAction}
                    title='Cari buku'
                    alignment='center'
                />
                <Layout
                    level='4'
                    style={styles.filterSearch}>
                    <Input
                        placeholder='Cari buku lainnya...'
                        value={searchQuery}
                        accessoryRight={renderSearchIcon}
                    />
                </Layout>
                <List
                    data={dataTwo}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <ListItemFirstCustomized item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <Divider />}
                    initialNumToRender={3}
                    onEndReachedThreshold={0.5}
                />
            </Layout>
        </Fragment>
    );
};

export default Search;
