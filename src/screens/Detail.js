import React, { Fragment } from 'react';
import { TopNavigation, Icon, TopNavigationAction, Layout, Text, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView } from 'react-native';
import { styles } from '../styles/Detail';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);
const AddIcon = (props) => (
    <Icon {...props} name='plus-circle-outline' />
);

const Detail = () => {
    const navigation = useNavigation();

    const BackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={() => navigation.goBack()}
        />
    );

    return (
        <Fragment>
            <TopNavigation
                title='Detail buku'
                alignment='center'
                accessoryLeft={BackAction}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Layout
                    level='4'
                    style={styles.layoutView}>
                    <Image
                        source={{
                            uri: 'https://source.unsplash.com/random',
                        }}
                        style={styles.thumbnail}
                    />
                    <Text
                        style={styles.title}
                        category='s1'>
                            Avatar: The Last Air Bender
                    </Text>
                    <Text
                        style={styles.author}
                        category='label'
                        appearance='hint'>
                            Pengarang: Jack Maa
                    </Text>
                    <Button
                        style={styles.genre}
                        size='tiny'>
                        Comedy
                    </Button>
                    <Button
                        style={styles.buttonBorrow}
                        accessoryLeft={AddIcon}
                        appearance='ghost'
                        status='info'
                        size='large'>
                            PINJAM BUKU
                    </Button>
                    <Layout level='2' style={styles.layoutDescription}>
                        <ScrollView nestedScrollEnabled={true}>
                        <Text
                            style={styles.description}
                            category='p1'>
                            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
                            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
                            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
                            TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
                        </Text>
                        </ScrollView>
                    </Layout>
                </Layout>
            </ScrollView>
        </Fragment>
    );
};

export default Detail;
