import { StyleSheet } from 'react-native';
import Responsive from 'react-native-lightweight-responsive';

export const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
        fontWeight: 'bold',
        fontSize: Responsive.font(16),
        marginBottom: 35,
    },
    view: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignContent: 'center',
    },
});
