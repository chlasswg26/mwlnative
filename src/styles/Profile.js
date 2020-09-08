import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        minHeight: Responsive.height(100),
    },
    avatar: {
        width: Responsive.width(150),
        height: Responsive.height(150),
        alignSelf: 'center',
        margin: 20,
    },
    buttonCamera: {
        alignSelf: 'center',
        marginHorizontal: 100,
        borderRadius: 30,
        width: Responsive.width(50),
        height: Responsive.height(50),
        bottom: 70,
        left: 50,
        marginBottom: -30,
    },
    secondLayout: {
        flex: 1,
        marginHorizontal: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    scrollView: {
        flex: 1,
        margin: 10,
    },
    listItem: {
        margin: 10,
    },
    buttonLogout: {
        alignSelf: 'center',
        marginBottom: 10,
        marginHorizontal: 100,
        borderRadius: 10,
    },
});
