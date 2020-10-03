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
           margin: Responsive.width(20),
           marginTop: Responsive.height(40),
         },
         buttonCamera: {
           alignSelf: 'center',
           marginHorizontal: Responsive.width(100),
           borderRadius: Responsive.width(30),
           width: Responsive.width(50),
           height: Responsive.height(50),
           bottom: Responsive.height(70),
           left: Responsive.height(50),
           marginBottom: Responsive.height(-30),
         },
         secondLayout: {
           flex: 1,
           marginHorizontal: Responsive.width(10),
           borderTopLeftRadius: Responsive.width(30),
           borderTopRightRadius: Responsive.width(30),
         },
         scrollView: {
           flex: 1,
           margin: Responsive.width(10),
         },
         listItem: {
           margin: Responsive.width(10),
         },
         buttonLogout: {
           alignSelf: 'center',
           marginBottom: Responsive.height(10),
           marginHorizontal: Responsive.width(100),
           borderRadius: Responsive.width(10),
         },
         topNavigation: {
           borderRadius: Responsive.width(25),
           marginHorizontal: Responsive.width(10),
           marginTop: Responsive.height(10),
         },
       });
