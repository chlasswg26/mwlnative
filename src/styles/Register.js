import { StyleSheet } from "react-native";
import Responsive from 'react-native-lightweight-responsive';

export const styles = StyleSheet.create({
    keyboardView: {
        flex: 1,
        justifyContent: 'center',
    },
    firstLayout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: Responsive.height(250),
        backgroundColor: 'teal',
    },
    subtitle: {
        marginTop: 16,
    },
    secondLayout: {
        paddingTop: 40,
        paddingHorizontal: 16,
    },
    input: {
        marginTop: 10,
        elevation: 10,
    },
    buttonRegister: {
        marginTop: 50,
        marginHorizontal: 16,
    },
    buttonLogin: {
        marginVertical: 22,
        marginHorizontal: 16,
    },
});
