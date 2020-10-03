import React, { Fragment, useEffect, useCallback, useState } from 'react';
import { ToastAndroid, BackHandler, ImageBackground, RefreshControl } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import ModalBackPress from '../components/ModalBackPress';
import LeftTop from '../layouts/LeftTop';
import { Layout, Text, List, ListItem, Divider } from '@ui-kitten/components';
import { styles } from '../styles/Dashboard';
import ListItemFirstCustomized from '../components/ListItemFirstCustomized';
import { useSelector, useDispatch } from 'react-redux';
import { getBookActionCreator, getBookByFilterActionCreator } from '../redux/actions/book';
import { SITE_ENDPOINT, SITE_NAME } from '@env';

const Dashboard = ({ navigation: { navigate } }) => {
    const [isClose, setIsClose] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [params, setParams] = useState({
      limit: 1,
    });
    const netInfo = useNetInfo();
    const dispatch = useDispatch();

    const handleBackPress = (value) => {
        setIsClose(value);
    };

    useEffect(() => {
        if (!netInfo.isConnected && netInfo.details) {
            navigate('Connection');
        } else {
            if (netInfo.isConnected && netInfo.details.strength < 50) {
                ToastAndroid.showWithGravityAndOffset(
                  `Koneksi ${netInfo.type} ${netInfo.details.ssid} tidak stabil`,
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

    const { responseBook, responseBookByFilter } = useSelector(state => state.book);

    useEffect(() => {
        dispatch(getBookActionCreator());
        dispatch(getBookByFilterActionCreator('', params));
    }, []);
    
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const dispatchRefresh = useCallback(() => {
        setIsRefresh(true);
        setParams({
          limit: 2,
        });

        wait(2000).then(() => {
            setIsRefresh(false);
            dispatch(getBookActionCreator());
            dispatch(getBookByFilterActionCreator('', params));
        });
    }, []);

    const renderItem = ({item}) => (
      <ListItem
        style={styles.listItemCarousel}
        onPress={() => console.log(item.id)}>
        <ImageBackground
          source={{
            uri: `${SITE_ENDPOINT}/images/${item.image}`,
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
                        {item.genre}
                </Text>
        </ListItem>
    );

    return (
      <Fragment>
        {isClose && (
          <ModalBackPress isVisible={isClose} setIsVisible={handleBackPress} />
        )}
        <LeftTop />
        <Layout style={styles.firstLayout}>
          <Text style={styles.layoutBadgeText}>{SITE_NAME}</Text>
          <List
            data={responseBook}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={5}
            onEndReachedThreshold={10}
          />
          <List
            data={responseBook}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItemGenre}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={5}
            onEndReachedThreshold={10}
          />
        </Layout>
        <Layout style={styles.secondLayout}>
          <List
            data={responseBookByFilter}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ListItemFirstCustomized item={item} />}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={Divider}
            initialNumToRender={3}
            onEndReachedThreshold={10}
            refreshControl={
              <RefreshControl
                refreshing={isRefresh}
                onRefresh={dispatchRefresh}
              />
            }
          />
        </Layout>
      </Fragment>
    );
};

export default Dashboard;
