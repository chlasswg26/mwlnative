import React, { Fragment } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { styles } from '../styles/Intro';

const slides = [
    {
        key: 'one',
        title: 'Selamat Datang',
        text: 'Hai, selamat datang di Most Wanted Library (MWLibrary).',
        image: require('../images/3255469.jpg'),
    },
    {
        key: 'two',
        title: 'Eksplorasi',
        text: 'Jelajahi pengetahuan baru dari buku-buku yang membuat wawasan kamu jadi luas.',
        image: require('../images/3255309.jpg'),
    },
    {
        key: 'three',
        title: 'Fitur',
        text: 'Didukung fitur yang sangat mudah dipahami, mulai dari meminjam buku keren dan melihat riwayat transaksi.',
        image: require('../images/3544858.jpg'),
    },
    {
        key: 'four',
        title: 'Mulai',
        text: 'Ayo mulai sekarang juga!',
        image: require('../images/3593987.jpg'),
    },
];

const Intro = ({ navigation: { replace } }) => {
    const renderItem = ({item}) => {
        return (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
    };

    const renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name='arrow-forward-circle-outline'
              color='rgba(255, 255, 255, .9)'
              size={24}
            />
          </View>
        );
    };

    const renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name='md-checkmark'
              color='rgba(255, 255, 255, .9)'
              size={24}
            />
          </View>
        );
    };

    const finishIntro = () => {
        AsyncStorage.setItem('firstLanding', 'Landed', (error) => {
            if (error) {
                console.log(error);
            } else {
                replace('Home');
            }
        });
    };

    return (
      <Fragment>
        <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
            onDone={finishIntro}
        />
      </Fragment>
    );
};

export default Intro;
