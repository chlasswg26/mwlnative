import { StyleSheet } from 'react-native';

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
        height: 150,
        width: 150,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    loadingText: {
        marginTop: -50,
        marginBottom: -10,
        fontSize: 12,
        fontWeight: 'bold',
    },
});
