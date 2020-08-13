import React, { Fragment, useEffect, useCallback, useState } from 'react';
import { ToastAndroid, BackHandler, ScrollView, StyleSheet, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useFocusEffect } from '@react-navigation/native';
import ModalBackPress from '../components/ModalBackPress';
import LeftTop from '../layouts/LeftTop';
import { ListItemFirstModel } from '../components/ListItemFirstModel';
import { Layout, Text } from '@ui-kitten/components';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';

const Dashboard = ({ navigation: { navigate } }) => {
    const [isClose, setIsClose] = useState(false);
    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', code: '#1abc9c' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
        { name: 'AMETHYST', code: '#9b59b6' },
        { name: 'WET ASPHALT', code: '#34495e' },
        { name: 'GREEN SEA', code: '#16a085' },
        { name: 'NEPHRITIS', code: '#27ae60' },
        { name: 'BELIZE HOLE', code: '#2980b9' },
        { name: 'WISTERIA', code: '#8e44ad' },
        { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
        { name: 'SUN FLOWER', code: '#f1c40f' },
        { name: 'CARROT', code: '#e67e22' },
        { name: 'ALIZARIN', code: '#e74c3c' },
        { name: 'CLOUDS', code: '#ecf0f1' },
        { name: 'CONCRETE', code: '#95a5a6' },
        { name: 'ORANGE', code: '#f39c12' },
        { name: 'PUMPKIN', code: '#d35400' },
        { name: 'POMEGRANATE', code: '#c0392b' },
        { name: 'SILVER', code: '#bdc3c7' },
        { name: 'ASBESTOS', code: '#7f8c8d' },
    ]);
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

    return (
        <Fragment>
            { isClose &&
                <ModalBackPress isVisible={isClose} setIsVisible={handleBackPress}  />
            }
            <LeftTop />
            <Layout level='4'>
                <SectionGrid
                    itemDimension={90}
                    // staticDimension={300}
                    // fixed
                    // spacing={20}
                    sections={[
                        {
                            title: 'Title1',
                            data: items.slice(0, 6),
                        },
                    ]}
                    style={styles.gridView}
                    renderItem={({ item, section, index }) => (
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCode}>{item.code}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                />
                {/* <FlatGrid
                    itemDimension={100}
                    data={items}
                    style={styles.gridView}
                    // staticDimension={300}
                    // fixed
                    spacing={5}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemCode}>{item.code}</Text>
                        </View>
                    )}
                /> */}
            </Layout>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        // flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
        backgroundColor: '#636e72',
        color: 'white',
        padding: 10,
    },
});


export default Dashboard;
