import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
         description: {
           flex: 3,
           textTransform: 'capitalize',
           textAlign: 'auto',
           margin: Responsive.width(10),
         },
         layoutDescription: {
           flex: 2,
           height: Responsive.height(400),
           margin: Responsive.width(10),
           alignItems: 'stretch',
         },
         buttonBorrow: {
           width: Responsive.width(150),
           height: Responsive.height(50),
           alignSelf: 'center',
           borderRadius: Responsive.width(10),
           bottom: Responsive.height(50),
           marginBottom: Responsive.height(-50),
         },
         genre: {
           width: Responsive.width(70),
           height: Responsive.height(30),
           borderRadius: Responsive.width(15),
           bottom: Responsive.height(150),
           marginLeft: Responsive.height(170),
         },
         author: {
           textTransform: 'capitalize',
           bottom: Responsive.height(170),
           marginLeft: Responsive.height(170),
           fontWeight: 'bold',
         },
         title: {
           textAlign: 'center',
           textTransform: 'uppercase',
           bottom: Responsive.width(210),
           marginLeft: Responsive.width(150),
           fontWeight: 'bold',
         },
         thumbnail: {
           margin: 10,
           width: Responsive.width(140),
           height: Responsive.height(200),
           borderRadius: Responsive.width(5),
         },
         layoutView: {
           flex: 1,
         },
       });
