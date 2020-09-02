import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
    listItemTitle: {
        marginBottom: 70,
        fontWeight: 'bold',
        left: 10,
        marginRight: 5,
        fontSize: Responsive.font(15),
        fontStyle: 'italic',
        textTransform: 'capitalize',
    },
    listItem: {
        backgroundColor: 'transparent',
        width: Responsive.height(350),
        height: Responsive.height(200),
    },
    listItemDescription: {
        bottom: 50,
        left: 15,
        marginRight: 10,
        textTransform: 'lowercase',
    },
    listItemButton: {
        marginLeft: 20,
        width: Responsive.width(60),
        height: Responsive.height(60),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    listItemAccessoryLeft: {
        width: Responsive.width(120),
        height: Responsive.height(190),
    },
    listItemAccessoryImage: {
        resizeMode: 'cover',
        borderRadius: 5,
    },
    listItemAccessoryBadge: {
        top: 165,
        height: Responsive.height(25),
        borderTopLeftRadius: 30,
        alignItems: 'center',
        elevation: 5,
    },
    listItemAccessoryBadgeText: {
        fontSize: Responsive.font(15),
        fontWeight: 'bold',
    },
});
