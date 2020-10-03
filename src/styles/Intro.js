import { StyleSheet } from 'react-native';
import Responsive from 'react-native-lightweight-responsive';

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff3034',
  },
  image: {
    width: Responsive.width(320),
    height: Responsive.height(320),
    marginVertical: Responsive.height(32),
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: Responsive.font(22),
    color: 'white',
    textAlign: 'center',
  },
  buttonCircle: {
    width: Responsive.width(44),
    height: Responsive.height(44),
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: Responsive.width(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
