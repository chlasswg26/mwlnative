import { StyleSheet } from 'react-native';
import Responsive from 'react-native-lightweight-responsive';

export const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: '#CCCCCC',
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
    },
    loadingWrapper: {
        height: Responsive.height(150),
        width: Responsive.width(150),
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    loadingText: {
        marginTop: -50,
        marginBottom: -10,
        fontSize: Responsive.font(12),
        fontWeight: 'bold',
    },
});
