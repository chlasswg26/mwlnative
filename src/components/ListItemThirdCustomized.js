import React, { Fragment } from 'react';
import { Layout, Text, Divider } from '@ui-kitten/components';
import { styles } from '../styles/ListItemThirdCustomized';

const ListItemThirdCustomized = (
    {
        hint,
        value,
        style
    }
) => {
    return (
        <Fragment>
            <Layout style={style}>
                <Text
                    appearance='hint'
                    category='s1'>
                    { hint }
                </Text>
                <Text
                    category='s2'
                    numberOfLines={1}
                    style={styles.textValue}>
                    { value }
                </Text>
                <Divider style={styles.divider} />
            </Layout>
        </Fragment>
    );
};

export default ListItemThirdCustomized;
