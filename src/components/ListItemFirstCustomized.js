import React, { Fragment } from 'react';
import { ListItem, Text, Button, Icon, Layout } from '@ui-kitten/components';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/ListItemFirstCustomized';

const ArrowIcon = (props) => (
  <Icon {...props} name='arrow-circle-right' />
);

const ListItemFirstCustomized = ({ item }) => {
  const navigation = useNavigation();

  return (
    <ListItem
      title={evaProps => <Text
        {...evaProps}
        category='label'
        numberOfLines={2}
        style={styles.listItemTitle}>{item.title}</Text>}
      style={styles.listItem}
      description={evaProps => (
        <Fragment>
          <Text
            {...evaProps}
            category='c1'
            style={styles.listItemDescription}
            appearance='hint'
            numberOfLines={3}>
            {item.description}
            </Text>

          <Button
            onPress={() => navigation.navigate('Detail')}
            style={styles.listItemButton}
            accessoryLeft={ArrowIcon}
          />
        </Fragment>
      )}
      accessoryLeft={() => (
        <ImageBackground
          source={{
            uri: item.image,
          }}
          style={styles.listItemAccessoryLeft}
          imageStyle={styles.listItemAccessoryImage}>
          <Layout style={styles.listItemAccessoryBadge}>
            <Text
              style={styles.listItemAccessoryBadgeText}
              onPress={() => navigation.navigate('Genre', item.id)}>
              {item.genre || 'None'}
            </Text>
          </Layout>
        </ImageBackground>
      )}
    />
  );
};

export default ListItemFirstCustomized;
