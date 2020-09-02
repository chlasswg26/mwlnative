import React, { Fragment } from 'react';
import { Layout, Text, Divider } from '@ui-kitten/components';

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
                    style={{
                        textAlign: 'right',
                        bottom: 20,
                        marginLeft: 150,
                        fontWeight: 'bold',
                    }}>
                    { value }
                </Text>
                <Divider />
            </Layout>
        </Fragment>
    );
};

export default ListItemThirdCustomized;
