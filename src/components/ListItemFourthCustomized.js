import React from 'react';
import { ListItem } from '@ui-kitten/components';
import { ImageBackground } from 'react-native';
import { styles } from '../styles/ListItemFourthCustomized';

export const ListItemFourthCustomized = () => {
    const ImageCard = () => (
        <ImageBackground
            source={{
                uri: 'https://source.unsplash.com/random',
            }}
            style={styles.imageCard}
            imageStyle={styles.imageStyle}
        />
    );
    
    return (
        <ListItem
            activeOpacity={0.6}
            style={styles.listItem}
            onPress={() => console.log('pressed')}>
            <ImageCard />
        </ListItem>
    );
};
