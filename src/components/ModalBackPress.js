import React, { useState, Fragment, useEffect } from 'react';
import { Button, Card, Modal, Text, Layout } from '@ui-kitten/components';
import { styles } from '../styles/ModalBackPress';
import { BackHandler } from 'react-native';
import { SITE_NAME } from '@env';

const ModalBackPress = ({ isVisible, setIsVisible }) => {
    return (
      <Fragment>
        <Modal visible={isVisible} backdropStyle={styles.backdrop}>
          <Card disabled={true}>
            <Text style={styles.text}>
              Anda ingin tutup aplikasi {SITE_NAME} ?
            </Text>
            <Layout style={styles.view}>
              <Button
                appearance="ghost"
                size="medium"
                status="danger"
                onPress={() => BackHandler.exitApp()}>
                Iya
              </Button>
              <Button
                appearance="ghost"
                size="medium"
                status="basic"
                onPress={() => setIsVisible(false)}>
                Tidak
              </Button>
            </Layout>
          </Card>
        </Modal>
      </Fragment>
    );
};

export default ModalBackPress;
