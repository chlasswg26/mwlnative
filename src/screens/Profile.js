import React, { Fragment, useState } from 'react';
import { Layout, Avatar, TopNavigation, TopNavigationAction, Icon, Button, Modal } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import ListItemThirdCustomized from '../components/ListItemThirdCustomized';
import { ScrollView, Alert, PermissionsAndroid } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { styles } from '../styles/Profile';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);
const CameraIcon = (props) => (
    <Icon {...props} name='camera' />
);
const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
);
const EditIcon = (props) => (
    <Icon {...props} name='edit' />
);

const Profile = () => {
    const navigation = useNavigation();
    const [uri, setUri] = useState();
    const [show, setShow] = useState(false);

    const BackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => navigation.goBack()}
        />
    );

    const EditAction = () => (
        <TopNavigationAction
            icon={EditIcon}
            onPress={() => setShow(true)}
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
            <Layout
                level='4'
                style={styles.layout}>
                <TopNavigation
                    title='Pengaturan'
                    alignment='center'
                    accessoryLeft={BackAction}
                    accessoryRight={EditAction}
                    style={styles.topNavigation}
                />
                <Avatar
                    source={{
                        uri: uri || 'https://api.adorable.io/avatars/285/abott@adorable.png',
                    }}
                    shape='round'
                    style={styles.avatar}
                />
                <Button
                    accessoryLeft={CameraIcon}
                    appearance='filled'
                    status='basic'
                    style={styles.buttonCamera}
                    onPress={() => selectFile()}
                />
                <Layout style={styles.secondLayout}>
                    <ScrollView
                        style={styles.scrollView}
                        showsVerticalScrollIndicator={false}>
                        <ListItemThirdCustomized
                            hint='Nama'
                            value='Ichlas Wardy Gustama'
                            style={styles.listItem}
                        />
                        <ListItemThirdCustomized
                            hint='Email'
                            value='Ichlas Wardy Gustama'
                            style={styles.listItem}
                        />
                        <ListItemThirdCustomized
                            hint='Status'
                            value='Ichlas Wardy Gustama'
                            style={styles.listItem}
                        />
                        <ListItemThirdCustomized
                            hint='Bergabung sejak'
                            value='Ichlas Wardy Gustama'
                            style={styles.listItem}
                        />
                    </ScrollView>
                    <Button
                        accessoryLeft={LogoutIcon}
                        appearance='filled'
                        status='danger'
                        size='large'
                        style={styles.buttonLogout}>
                        Keluar
                    </Button>
                    
                    <Modal
                        visible={show}
                        onBackdropPress={() => setShow(true)}>
                        <Button />
                    </Modal>
                </Layout>
            </Layout>
        </Fragment>
    );
};

export default Profile;
