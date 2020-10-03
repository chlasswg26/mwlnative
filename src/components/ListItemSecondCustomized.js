import React, { Fragment } from 'react';
import { ListItem, Text, Button, Avatar } from '@ui-kitten/components';
import { ImageBackground } from 'react-native';
import { styles } from '../styles/ListItemSecondCustomized';

const ListItemSecondCustomized = ({ item }) => {

  const UserThumbnail = () => (
    <Avatar
      shape="round"
      size="tiny"
      source={{
        uri: 'https://source.unsplash.com/random',
      }}
      style={styles.avatar}
    />
  );

  return (
    <ListItem
      title={(evaProps) => (
        <Text
          {...evaProps}
          category="label"
          numberOfLines={2}
          style={styles.listItemTitle}>
          {item.title} Nice
        </Text>
      )}
      style={styles.listItem}
      description={(evaProps) => (
        <Fragment>
          <Text
            {...evaProps}
            category="label"
            style={styles.listItemDescription}
            numberOfLines={3}>
            Sedang dipinjam oleh:
          </Text>

          <Button
            style={styles.listItemButton}
            size="tiny"
            appearance="ghost"
            status="danger"
            accessoryLeft={UserThumbnail}
            touchSoundDisabled={true}>
            Ichlas Wardy Gustama
          </Button>
        </Fragment>
      )}
      accessoryLeft={() => (
        <ImageBackground
          source={{
            uri: item.image || 'https://source.unsplash.com/random',
          }}
          style={styles.listItemAccessoryLeft}
          imageStyle={styles.listItemAccessoryImage}
        />
      )}
    />
  );
};

export default ListItemSecondCustomized;
