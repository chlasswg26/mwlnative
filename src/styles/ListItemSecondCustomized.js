import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
    listItemTitle: {
        marginBottom: 50,
        fontWeight: 'bold',
        left: 10,
        marginRight: 5,
        fontSize: Responsive.font(18),
        fontStyle: 'italic',
        textTransform: 'capitalize',
    },
    listItem: {
        backgroundColor: 'transparent',
        width: Responsive.height(350),
        height: Responsive.height(200),
    },
    listItemDescription: {
        bottom: 35,
        left: 15,
        marginRight: 10,
        textTransform: 'uppercase',
    },
    listItemButton: {
        width: Responsive.width(200),
        height: Responsive.height(30),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    listItemAccessoryLeft: {
        width: Responsive.width(120),
        height: Responsive.height(190),
    },
    listItemAccessoryImage: {
        resizeMode: 'cover',
        borderRadius: 5,
    },
    avatar: {
        marginRight: 10,
    },
});
