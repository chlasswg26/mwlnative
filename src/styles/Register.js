import { StyleSheet } from "react-native";
import Responsive from 'react-native-lightweight-responsive';

export const styles = StyleSheet.create({
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
           paddingTop: Responsive.height(40),
           paddingHorizontal: Responsive.width(16),
         },
         input: {
           marginTop: Responsive.height(10),
           elevation: 10,
         },
         buttonRegister: {
           marginTop: Responsive.height(50),
           marginHorizontal: Responsive.width(16),
         },
         buttonLogin: {
           marginVertical: Responsive.height(22),
           marginHorizontal: Responsive.width(16),
         },
       });
