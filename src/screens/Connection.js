import React, { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { styles } from '../styles/Connection';
import { Layout, Text } from '@ui-kitten/components';

const Connection = ({ navigation: { goBack } }) => {
    const netInfo = useNetInfo();

    useEffect(() => {
        if (netInfo.isConnected && netInfo.isInternetReachable) {
            goBack();
        }
    }, [netInfo]);

    return (
      <Layout style={styles.viewStyles}>
        <Text style={styles.textStyles}>Yahh... koneksi terputus 😵</Text>
      </Layout>
    );
};

export default Connection;
