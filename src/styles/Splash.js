import { StyleSheet } from 'react-native';
import Responsive from 'react-native-lightweight-responsive';

export const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: Responsive.font(40),
    fontWeight: 'bold',
  },
  image: {
    width: Responsive.width(100),
    height: Responsive.height(100),
  },
});
