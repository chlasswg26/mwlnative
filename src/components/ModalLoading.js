import React, { Fragment, memo } from 'react';
import { Modal, Layout, Spinner, Text } from '@ui-kitten/components';
import { styles } from '../styles/ModalLoading';

function ModalLoading({ isVisible, type }) {
    return (
        <Fragment>
            <Modal
                visible={isVisible}
                backdropStyle={styles.backdrop}>
                <Layout style={styles.modalBackground}>
                    <Layout style={styles.loadingWrapper}>
                        <Spinner size='giant' />
                        <Text style={styles.loadingText}>{type}</Text>
                    </Layout>
                </Layout>
            </Modal>
        </Fragment>
    );
};

function arePropsEqual(prevProps, nextProps) {
    return prevProps.isVisible === nextProps.isVisible;
}

export default memo(ModalLoading, arePropsEqual);
