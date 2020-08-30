import React, { Fragment, useEffect, useCallback, useState } from 'react';
import { ToastAndroid, BackHandler, ImageBackground } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import ModalBackPress from '../components/ModalBackPress';
import LeftTop from '../layouts/LeftTop';
import { Layout, Text, List, ListItem, Divider } from '@ui-kitten/components';
import { styles } from '../styles/Dashboard';
import ListItemFirstCustomized from '../components/ListItemFirstCustomized';

const Dashboard = ({ navigation: { navigate } }) => {
    const [isClose, setIsClose] = useState(false);
    const netInfo = useNetInfo();

    const handleBackPress = (value) => {
        setIsClose(value);
    };

    useEffect(() => {
        if (!netInfo.isConnected && netInfo.details) {
            navigate('Connection');
        } else {
            if (netInfo.isConnected && netInfo.details.strength < 50) {
                ToastAndroid.showWithGravityAndOffset(
                  'Koneksi ' + netInfo.type + ' ' + netInfo.details.ssid + ' tidak stabil',
                  ToastAndroid.LONG,
                  ToastAndroid.TOP,
                  25,
                  50,
                );
            }
        }
    }, [netInfo]);
    
    useFocusEffect(
        useCallback(() => {
            const onCloseApp = () => {
                setIsClose(true);
                return true;
            };

            BackHandler.addEventListener(
                'hardwareBackPress',
                onCloseApp
            );

            return () =>
              BackHandler.removeEventListener(
                  'hardwareBackPress',
                  onCloseApp
            );
        }, [])
    );

    const data = new Array(8).fill({
      title: 'Item' + Math.random(),
    });

    const dataTwo = new Array(8).fill({
      title: 'Title for Item',
      description: 'Description for Item',
    });

    const renderItem = ({ item }) => (
        <ListItem
            style={styles.listItemCarousel}
            onPress={() => console.log(item.title)}>
            <ImageBackground
                source={{
                    uri: item.image,
                }}
                style={styles.listItemChild}
                imageStyle={styles.listItemChildImage}
            />
        </ListItem>
    );

    const renderItemGenre = ({ item }) => (
        <ListItem
            style={styles.listItemGenre}
            onPress={() => console.log(item.title)}>
                <Text
                    category='h5'
                    numberOfLines={1}>
                        Action
                </Text>
        </ListItem>
    );

    return (
        <Fragment>
            { isClose &&
                <ModalBackPress isVisible={isClose} setIsVisible={handleBackPress}  />
            }
            <LeftTop />
            <Layout style={styles.firstLayout}>
                <Text style={styles.layoutBadgeText}>
                    MWLibrary
                </Text>
                <List
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                />
                <List
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItemGenre}
                />
            </Layout>
            <Layout style={styles.secondLayout}>
                <List
                    data={dataTwo}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <ListItemFirstCustomized item={item} />}
                    ItemSeparatorComponent={Divider}
                />
            </Layout>
        </Fragment>
    );
};

export default Dashboard;
