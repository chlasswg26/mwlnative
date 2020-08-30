import { StyleSheet } from 'react-native';
import Responsive from 'react-native-lightweight-responsive';

export const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    textLogo: {
        fontSize: Responsive.font(20),
        fontWeight: 'bold',
    },
    avatarLayout: {
        flexDirection: 'row',
        marginTop: 15,
    },
    captionLayout: {
        flexDirection: 'column',
        marginLeft: 15,
    },
    drawerLayoutItem: {
        marginTop: 20,
    },
    avatarLogo: {
        marginLeft: -20,
        marginRight: 8,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: Responsive.font(16),
        marginTop: 3,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: Responsive.font(14),
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 10,
    },
    drawerNested: {
        paddingBottom: 22,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preferenceLabel: {
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
