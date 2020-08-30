import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

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
        paddingTop: 52,
        paddingHorizontal: 16,
    },
    inputEmail: {
        elevation: 10,
    },
    inputPassword: {
        marginTop: 16,
        elevation: 10,
    },
    buttonLogin: {
        marginTop: 50,
        marginHorizontal: 16,
    },
    buttonRegister: {
        marginVertical: 22,
        marginHorizontal: 16,
    },
});
