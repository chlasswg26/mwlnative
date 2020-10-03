import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
         listItemCarousel: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           width: Responsive.width(100),
           height: Responsive.height(150),
           margin: Responsive.width(10),
           borderRadius: Responsive.width(10),
           elevation: 1,
           backgroundColor: 'transparent',
         },
         listItemChild: {
           width: Responsive.width(100),
           height: Responsive.height(150),
         },
         listItemChildImage: {
           resizeMode: 'cover',
           borderRadius: Responsive.width(5),
         },
         layoutBadgeText: {
           marginBottom: Responsive.height(10),
           marginLeft: Responsive.height(10),
           marginTop: Responsive.height(10),
           borderLeftWidth: Responsive.width(10),
           paddingLeft: Responsive.height(20),
           fontSize: Responsive.font(25),
           fontWeight: 'bold',
         },
         listItemGenre: {
           width: Responsive.width(110),
           height: Responsive.height(50),
           justifyContent: 'center',
           borderRadius: Responsive.width(5),
           margin: Responsive.width(5),
           elevation: 1,
         },
         firstLayout: {
           flex: 1,
         },
         secondLayout: {
           flex: 1,
         },
       });
