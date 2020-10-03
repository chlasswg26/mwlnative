import { StyleSheet } from "react-native";
import Responsive from "react-native-lightweight-responsive";

export const styles = StyleSheet.create({
         layoutWrapper: {
           flex: 1,
         },
         keyboardView: {
           flex: 1,
           justifyContent: 'center',
         },
         firstLayout: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           minHeight: Responsive.height(250),
           backgroundColor: 'teal',
         },
         subtitle: {
           marginTop: Responsive.height(16),
         },
         secondLayout: {
           paddingTop: Responsive.height(52),
           paddingHorizontal: Responsive.width(16),
         },
         inputEmail: {
           elevation: 10,
         },
         inputPassword: {
           marginTop: Responsive.height(16),
           elevation: 10,
         },
         buttonLogin: {
           marginTop: Responsive.height(50),
           marginHorizontal: Responsive.width(16),
         },
         buttonRegister: {
           marginVertical: Responsive.height(22),
           marginHorizontal: Responsive.width(16),
         },
       });
