import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
    listItemCarousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Responsive.width(100),
        height: Responsive.height(150),
        margin: 10,
        borderRadius: 10,
        elevation: 1,
        backgroundColor: 'transparent',
    },
    listItemChild: {
        width: Responsive.width(100),
        height: Responsive.height(150),
    },
    listItemChildImage: {
        resizeMode: 'cover',
        borderRadius: 5,
    },
    layoutBadgeText: {
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
        borderLeftWidth: 10,
        paddingLeft: 20,
        fontSize: Responsive.font(25),
        fontWeight: 'bold',
    },
    listItemGenre: {
        width: Responsive.width(110),
        height: Responsive.height(50),
        justifyContent: 'center',
        borderRadius: 5,
        margin: 5,
        elevation: 1,
    },
    firstLayout: {
        flex: 1,
    },
    secondLayout: {
        flex: 1,
    },
});
