import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
         listItemTitle: {
           marginBottom: Responsive.height(70),
           fontWeight: 'bold',
           left: Responsive.height(10),
           marginRight: Responsive.height(5),
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
           bottom: Responsive.height(50),
           left: Responsive.height(15),
           marginRight: Responsive.height(10),
           textTransform: 'lowercase',
         },
         listItemButton: {
           marginLeft: Responsive.height(20),
           width: Responsive.width(60),
           height: Responsive.height(60),
           borderRadius: Responsive.width(30),
           bottom: Responsive.height(25),
           alignSelf: 'center',
         },
         listItemAccessoryLeft: {
           width: Responsive.width(120),
           height: Responsive.height(190),
         },
         listItemAccessoryImage: {
           resizeMode: 'cover',
           borderRadius: Responsive.width(5),
         },
         listItemAccessoryBadge: {
           top: Responsive.height(165),
           height: Responsive.height(25),
           borderTopLeftRadius: Responsive.width(30),
           alignItems: 'center',
           elevation: 1,
         },
         listItemAccessoryBadgeText: {
           fontSize: Responsive.font(15),
           fontWeight: 'bold',
           textAlign: 'center',
         },
       });
