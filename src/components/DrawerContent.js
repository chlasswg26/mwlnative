import React, { useContext, useState, useEffect, Fragment } from 'react';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { ImageBackground, TouchableHighlight } from 'react-native';
import {
  Toggle,
  Icon,
  Layout,
  Avatar,
  Text,
  DrawerItem,
  TopNavigation,
  Button,
} from '@ui-kitten/components';
import { styles } from '../styles/DrawerContent';
import { ThemeContext } from '../context/theme-context';
import AsyncStorage from '@react-native-community/async-storage';
import ModalLoading from './ModalLoading';
import { useNavigation } from '@react-navigation/native';

const LogoutIcon = (props) => {
    return <Icon {...props} name='log-out-outline' />;
};
const HomeIcon = (props) => {
    return <Icon {...props} name='home-outline' />;
};
const BookIcon = (props) => {
    return <Icon {...props} name='book-outline' />;
};
const HistoryIcon = (props) => {
    return <Icon {...props} name='smiling-face-outline' />;
};
const SunIcon = (props) => {
    return <Icon {...props} name='sun' />;
};
const MoonIcon = (props) => {
    return <Icon {...props} name='moon-outline' />;
};
const CloseIcon = (props) => {
    return <Icon {...props} name='close' />;
};
const SettingIcon = (props) => {
  return <Icon {...props} name='settings-outline' />;
};

export const DrawerContent = (props) => {
    const navigation = useNavigation();
    const themeContext = useContext(ThemeContext);
    const [megaState, setMegaState] = useState({
        toggle: false,
        showModal: true,
        caption: 'Sedang memuat...',
    });
    const { toggle, showModal, caption } = megaState;

    useEffect(() => {
        const unsubscribeTimeout = setTimeout(() => {
            const loadToggle = async () => {
                try {
                    await AsyncStorage.getItem('theme', (error, result) => {
                        if (error) {
                            setMegaState({
                                ...megaState,
                                toggle: false,
                                showModal: false,
                                caption: false,
                            });
                        } else {
                            if (result === 'dark') {
                                setMegaState({
                                    ...megaState,
                                    toggle: true,
                                    showModal: false,
                                    caption: false,
                                });
                            } else {
                                setMegaState({
                                    ...megaState,
                                    toggle: false,
                                    showModal: false,
                                    caption: false,
                                });
                            }
                        }
                    });
                } catch (error) {
                    console.log(error);
                    setMegaState({
                        ...megaState,
                        toggle: false,
                        showModal: false,
                        caption: false,
                    });
                }
            };
    
            loadToggle();
        }, 7000);

        return () => {
            clearTimeout(unsubscribeTimeout);
        };
    }, []);

    const handleToggle = async () => {
        setMegaState({
            ...megaState,
            showModal: true,
            caption: themeContext.theme === 'dark' ? 'Beralih ke mode terang' : (
                themeContext.theme === 'light' && 'Beralih ke mode gelap'
            ),
        });
        
        try {
            await AsyncStorage.setItem(
              'theme',
              themeContext.theme === 'dark' ? 'light' : 'dark',
              (error) => {
                  if (error) {
                      console.log(error);
                      setMegaState({
                          ...megaState,
                          toggle: false,
                          showModal: false,
                          caption: false,
                      });
                  } else {
                      setMegaState({
                          ...megaState,
                          toggle: themeContext.theme === 'dark' ? false : (
                              themeContext.theme === 'light' && true
                          ),
                          showModal: false,
                          caption: false,
                      });
                      themeContext.toggleTheme();
                  }
              },
            );
        } catch (error) {
            console.log(error);
            setMegaState({
                ...megaState,
                toggle: false,
                showModal: false,
                caption: false,
            });
        }
    };

    const ToggleMenu = () => {
        return <Toggle checked={toggle} onChange={() => handleToggle()} status='info' />;
    };

    const SiteLogo = () => {
        return (
            <Avatar
                source={require('../images/web_hi_res_512.png')}
                ImageComponent={ImageBackground}
                shape='rounded'
                size='small'
                style={styles.avatarLogo}
            />
        );
    };

    const CloseDrawerButton = () => {
        return (
            <Button
                accessoryLeft={CloseIcon}
                appearance='ghost'
                status='danger'
                size='large'
                style={styles.buttonClose}
                onPress={() => props.navigation.toggleDrawer()}
            />
        );
    };

    return (
      <Fragment>
        {showModal ? (
          <ModalLoading isVisible={showModal} type={caption} />
        ) : (
          !showModal && <ModalLoading isVisible={showModal} type={caption} />
        )}
        <Layout style={styles.drawerContent}>
          <DrawerContentScrollView {...props}>
            <Layout style={styles.drawerContent}>
              <Layout style={styles.userInfoSection}>
                <TopNavigation
                  title={(evaProps) => (
                    <Text {...evaProps} style={styles.textLogo}>
                      MWLibrary
                    </Text>
                  )}
                  accessoryLeft={SiteLogo}
                  accessoryRight={CloseDrawerButton}
                />
                <Layout style={styles.avatarLayout}>
                  <TouchableHighlight
                    activeOpacity={0.3}
                    underlayColor="transparent"
                    onPress={() => navigation.navigate('Profile')}>
                    <Avatar
                      source={{
                        uri:
                          'https://api.adorable.io/avatars/285' +
                          'abott@adorable.io' +
                          '.png',
                      }}
                      ImageComponent={ImageBackground}
                      size="giant"
                    />
                  </TouchableHighlight>
                  <Layout style={styles.captionLayout}>
                    <TouchableHighlight
                      activeOpacity={0.3}
                      underlayColor="transparent"
                      onPress={() => navigation.navigate('Profile')}>
                      <Text
                        appearance="default"
                        numberOfLines={1}
                        style={styles.title}>
                        Ichlas Wardy Gustama
                      </Text>
                    </TouchableHighlight>
                    <Text appearance="hint" style={styles.caption}>
                      Pengguna
                    </Text>
                  </Layout>
                </Layout>

                <Layout style={styles.row}>
                  <Layout style={styles.section}>
                    <Text
                      appearance="default"
                      style={[styles.paragraph, styles.caption]}>
                      1
                    </Text>
                    <Text appearance="hint" style={styles.caption}>
                      Buku sedang dipinjam
                    </Text>
                  </Layout>
                </Layout>
              </Layout>

              <Layout style={styles.drawerLayoutItem}>
                <DrawerItem
                  title="Beranda"
                  accessoryLeft={HomeIcon}
                  style={styles.drawerNested}
                  onPress={() => props.navigation.navigate('Dashboard')}
                />
                <DrawerItem
                  title="Buku Saya"
                  accessoryLeft={BookIcon}
                  style={styles.drawerNested}
                  onPress={() => props.navigation.navigate('Book')}
                />
                <DrawerItem
                  title="Riwayat Aksi"
                  accessoryLeft={HistoryIcon}
                  style={styles.drawerNested}
                  onPress={() => navigation.navigate('History')}
                />
              </Layout>

              <Layout>
                <Layout style={styles.preference}>
                  <Text appearance="hint" category="p1">
                    Preferensi
                  </Text>
                </Layout>
                <DrawerItem
                  title={toggle ? 'Mode Gelap' : !toggle && 'Mode Terang'}
                  accessoryLeft={toggle ? MoonIcon : !toggle && SunIcon}
                  accessoryRight={ToggleMenu}
                />
                <DrawerItem
                  title="Pengaturan"
                  accessoryLeft={SettingIcon}
                  style={styles.drawerNested}
                  onPress={() => props.navigation.navigate('Profile')}
                />
              </Layout>
            </Layout>
          </DrawerContentScrollView>

          <DrawerItem
            title="Keluar"
            accessoryLeft={LogoutIcon}
            style={styles.bottomDrawerSection}
            onPress={() => props.navigation.navigate('Verify')}
          />
        </Layout>
      </Fragment>
    );
};
