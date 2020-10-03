import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
         textValue: {
           textAlign: 'right',
           bottom: Responsive.height(20),
           marginLeft: Responsive.height(150),
           fontWeight: 'bold',
         },
         divider: {
           borderWidth: Responsive.width(1),
         },
       });
