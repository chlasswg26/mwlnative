import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
         imageCard: {
           width: Responsive.width(100),
           height: Responsive.height(170),
           elevation: 1,
         },
         imageStyle: {
           borderRadius: Responsive.width(10),
         },
         listItem: {
           width: Responsive.width(100),
           height: Responsive.height(170),
           margin: Responsive.width(10),
           borderRadius: Responsive.width(10),
           justifyContent: 'center',
         },
       });
