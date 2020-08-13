import React, { Fragment } from 'react';
import { Layout, Text, ListItem } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';
import { styles } from '../styles/ListItemFirstModel';

export const ListItemFirstModel = () => {
    return (
        <Fragment>
            <SafeAreaView style={styles.flexBox}>
                <Layout level='4'>
                    <Text
                        category='s1'
                        style={styles.accessoryLabel}>
                        Recently
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainer}>
                        <ListItem
                            title={() => (
                                <ImageBackground source={{
                                    uri: 'https://cdn.britannica.com/s:800x1000/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
                                }} style={styles.imageBackground} imageStyle={styles.imageStyle} overflow='visible'>
                                    <Layout style={styles.listItemLayout}>
                                        <Text style={styles.genreCaption}>Action</Text>
                                    </Layout>
                                </ImageBackground>
                            )}
                            style={styles.listItem}
                            onPress={() => console.log('clicked')}
                        />
                        <ListItem
                            title={() => (
                                <ImageBackground source={{
                                    uri: 'https://cdn.britannica.com/s:800x1000/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
                                }} style={styles.imageBackground} imageStyle={styles.imageStyle} overflow='visible'>
                                    <Layout style={styles.listItemLayout}>
                                        <Text style={styles.genreCaption}>Action</Text>
                                    </Layout>
                                </ImageBackground>
                            )}
                            style={styles.listItem}
                            onPress={() => console.log('clicked')}
                        />
                        <ListItem
                            title={() => (
                                <ImageBackground source={{
                                    uri: 'https://cdn.britannica.com/s:800x1000/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
                                }} style={styles.imageBackground} imageStyle={styles.imageStyle} overflow='visible'>
                                    <Layout style={styles.listItemLayout}>
                                        <Text style={styles.genreCaption}>Action</Text>
                                    </Layout>
                                </ImageBackground>
                            )}
                            style={styles.listItem}
                            onPress={() => console.log('clicked')}
                        />
                    </ScrollView>
                </Layout>
            </SafeAreaView>
        </Fragment>
    );
};
