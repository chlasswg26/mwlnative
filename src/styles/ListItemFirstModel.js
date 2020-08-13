import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    flexBox: {
        flex: 1,
        marginBottom: 50,
    },
    contentContainer: {
        flexDirection: 'row',
    },
    imageBackground: {
        backgroundColor: 'transparent',
        width: 150,
        height: 250,
    },
    imageStyle: {
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 5,
    },
    listItem: {
        backgroundColor: 'transparent',
    },
    accessoryLabel: {
        bottom: 10,
        left: 10,
        marginTop: 20,
        marginRight: 250,
        borderBottomWidth: 5,
        borderBottomRightRadius: 20,
        borderBottomColor: 'grey',
        fontSize: 25,
        fontWeight: 'bold',
    },
    listItemLayout: {
        top: 225,
        borderRadius: 5,
        borderTopStartRadius: 30,
        borderTopEndRadius: 0,
        elevation: 10,
    },
    genreCaption: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
    },
});
