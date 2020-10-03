import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
         listItemTitle: {
           marginBottom: Responsive.height(50),
           fontWeight: 'bold',
           left: Responsive.height(10),
           marginRight: Responsive.height(5),
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
           bottom: Responsive.height(35),
           left: Responsive.height(15),
           marginRight: Responsive.height(10),
           textTransform: 'uppercase',
         },
         listItemButton: {
           width: Responsive.width(200),
           height: Responsive.height(30),
           borderRadius: Responsive.width(10),
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
           borderRadius: Responsive.width(5),
         },
         avatar: {
           marginRight: Responsive.width(10),
         },
       });
