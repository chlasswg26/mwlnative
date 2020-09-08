import { StyleSheet } from "react-native";
import Responsive from 'react-native-lightweight-responsive';

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
    },
    keyboardView: {
        flex: 1,
        margin: 10,
    },
    textTitle: {
        top: 150,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    secondLayout: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '60%',
    },
    input: {
        elevation: 5,
        fontWeight: 'bold',
        width: Responsive.width(55),
    },
    textInput: {
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    thirdLayout: {
        flex: 2,
    },
    wave: {
        aspectRatio: 1,
    },
});
