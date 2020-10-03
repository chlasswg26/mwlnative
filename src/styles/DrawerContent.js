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
           marginTop: Responsive.height(15),
         },
         captionLayout: {
           flexDirection: 'column',
           marginLeft: Responsive.height(15),
         },
         drawerLayoutItem: {
           marginTop: Responsive.height(20),
         },
         avatarLogo: {
           marginLeft: Responsive.height(-20),
           marginRight: Responsive.height(8),
         },
         userInfoSection: {
           paddingLeft: Responsive.height(20),
         },
         title: {
           fontSize: Responsive.font(16),
           marginTop: Responsive.height(3),
           marginBottom: Responsive.height(10),
           fontWeight: 'bold',
         },
         caption: {
           fontSize: Responsive.font(14),
           lineHeight: Responsive.height(14),
         },
         row: {
           marginTop: Responsive.height(20),
           flexDirection: 'row',
           alignItems: 'center',
         },
         section: {
           flexDirection: 'row',
           alignItems: 'center',
           marginRight: Responsive.height(15),
         },
         paragraph: {
           fontWeight: 'bold',
           marginRight: Responsive.height(3),
         },
         drawerSection: {
           marginTop: Responsive.height(10),
         },
         drawerNested: {
           paddingBottom: Responsive.height(22),
         },
         bottomDrawerSection: {
           marginBottom: Responsive.height(15),
           borderTopColor: '#f4f4f4',
           borderTopWidth: Responsive.width(1),
         },
         preferenceLabel: {
           borderTopColor: '#f4f4f4',
           borderTopWidth: Responsive.width(1),
         },
         preference: {
           flexDirection: 'row',
           justifyContent: 'space-between',
           paddingVertical: Responsive.height(12),
           paddingHorizontal: Responsive.width(16),
         },
       });
