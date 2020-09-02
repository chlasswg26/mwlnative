import React, { Fragment, useState } from 'react';
import { Layout, Avatar, TopNavigation, TopNavigationAction, Icon, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import ListItemThirdCustomized from '../components/ListItemThirdCustomized';
import { ScrollView, Alert, PermissionsAndroid } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);
const CameraIcon = (props) => (
    <Icon {...props} name='camera' />
);
const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);

const Profile = () => {
    const navigation = useNavigation();
    const [uri, setUri] = useState();

    const BackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => navigation.goBack()}
        />
    );

    const selectFile = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: "Ganti Foto",
                    message:
                        "Aksi ini membutuhkan akses penyimpanan internal & eksternal, " +
                        "Jika ingin melanjutkan klik izinkan akses, jika tidak silahkan di tolak.",
                    buttonPositive: "Lanjut"
                }
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                const response = await DocumentPicker.pick({
                    type: [DocumentPicker.types.images],
                });
                if (response.type) {
                    setUri(response.uri);
                } else {
                    Alert.alert(
                        'Peringatan!',
                        'Hanya gambar yang dapat diunggah.',
                        ['OKE'],
                    );
                }
            } else {
                console.log("External storage permission denied");
            }
        } catch (error) {
            if (DocumentPicker.isCancel(error)) {
                Alert.alert(
                    'Peringatan!',
                    'Gambar batal diunggah.',
                    ['OKE'],
                );
            } else {
                console.log(error);
            }
        }
    };

    return (
        <Fragment>
            <Layout level='4' style={{
                flex: 1,
                minHeight: 100,
            }}>
                <TopNavigation
                    title='Pengaturan'
                    alignment='center'
                    accessoryLeft={BackAction}
                    style={{
                        marginHorizontal: 10,
                        marginTop: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }}
                />
                <Avatar
                    source={{
                        uri: uri || 'https://api.adorable.io/avatars/285/abott@adorable.png',
                    }}
                    shape='round'
                    style={{
                        width: 150,
                        height: 150,
                        alignSelf: 'center',
                        margin: 20,
                    }}
                />
                <Button
                    accessoryLeft={CameraIcon}
                    appearance='filled'
                    status='basic'
                    style={{
                        alignSelf: 'center',
                        marginHorizontal: 100,
                        borderRadius: 30,
                        width: 50,
                        height: 50,
                        bottom: 70,
                        left: 50,
                        marginBottom: -30,
                    }}
                    onPress={() => selectFile()}
                />
                <Layout style={{
                    flex: 1,
                    marginHorizontal: 10,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}>
                    <ScrollView
                        style={{
                            flex: 1,
                            margin: 10,
                        }}
                        showsVerticalScrollIndicator={false}>
                        <ListItemThirdCustomized
                            hint='Nama'
                            value='Ichlas Wardy Gustama'
                            style={{
                                margin: 10,
                            }}
                        />
                        <ListItemThirdCustomized
                            hint='Email'
                            value='Ichlas Wardy Gustama'
                            style={{
                                margin: 10,
                            }}
                        />
                        <ListItemThirdCustomized
                            hint='Status'
                            value='Ichlas Wardy Gustama'
                            style={{
                                margin: 10,
                            }}
                        />
                        <ListItemThirdCustomized
                            hint='Bergabung sejak'
                            value='Ichlas Wardy Gustama'
                            style={{
                                margin: 10,
                            }}
                        />
                    </ScrollView>
                    <Button
                        accessoryLeft={LogoutIcon}
                        appearance='filled'
                        status='danger'
                        size='large'
                        style={{
                            alignSelf: 'center',
                            marginBottom: 10,
                            marginHorizontal: 100,
                            borderRadius: 10,
                        }}>
                        Keluar
                    </Button>
                </Layout>
            </Layout>
        </Fragment>
    );
};

export default Profile;
