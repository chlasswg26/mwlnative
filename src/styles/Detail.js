import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
    description: {
        flex: 3,
        textTransform: 'capitalize',
        textAlign: 'auto',
        margin: 10,
    },
    layoutDescription: {
        flex: 2,
        height: Responsive.height(400),
        margin: 10,
        alignItems: 'stretch',
    },
    buttonBorrow: {
        width: Responsive.width(150),
        height: Responsive.height(50),
        alignSelf: 'auto',
        borderRadius: 10,
        bottom: 80,
        marginBottom: -70,
        left: 100,
    },
    genre: {
        width: Responsive.width(70),
        height: Responsive.height(30),
        borderRadius: 15,
        bottom: 150,
        marginLeft: 170,
    },
    author: {
        textTransform: 'capitalize',
        bottom: 170,
        marginLeft: 170,
        fontWeight: 'bold',
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        bottom: 210,
        marginLeft: 150,
        fontWeight: 'bold',
    },
    thumbnail: {
        margin: 10,
        width: Responsive.width(140),
        height: Responsive.height(200),
        borderRadius: 5,
    },
    layoutView: {
        flex: 1,
    },
});
