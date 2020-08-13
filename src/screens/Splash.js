import React, { Fragment, useEffect } from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { Avatar, Layout, Text } from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../styles/Splash';

const Splash = ({ navigation: { replace } }) => {
    useEffect(() => {
        const loadFirstLanding = async () => {
            try {
                await AsyncStorage.getItem('firstLanding', (error, result) => {
                    if (error) {
                        replace('Intro');
                    } else {
                        if (result !== null) {
                            replace('Home');
                        } else {
                            replace('Intro');
                        }
                    }
                });
            } catch (error) {
                console.log(error);
            }
        };

        loadFirstLanding();
    }, []);

    return (
        <Fragment>
            <StatusBar hidden={true} showHideTransition='slide' />
            <Layout style={styles.viewStyles}>
                <Avatar
                    source={require('../images/web_hi_res_512.png')}
                    ImageComponent={ImageBackground}
                    style={styles.image}
                />
                <Text style={styles.textStyles}>📚 MWLibrary 📚</Text>
            </Layout>
        </Fragment>
    );
};

export default Splash;
