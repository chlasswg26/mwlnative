import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
         flexBox: {
           flex: 1,
         },
         filterBackdrop: {
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
         },
         filterSearch: {
           paddingHorizontal: Responsive.width(16),
           paddingTop: Responsive.height(16),
           paddingBottom: Responsive.height(8),
           elevation: 1,
         },
       });
