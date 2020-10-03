import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import {
  asyncStorage,
  networking,
  overlay,
  openInEditor,
  trackGlobalErrors,
} from 'reactotron-react-native';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) // add redux
  .use(asyncStorage()) // add async storage
  .use(networking()) // add networking
  .use(overlay()) // add image overlay
  .use(openInEditor()) // add open in editor
  .use(trackGlobalErrors()) // track global error
  .connect(); // let's connect!
  
export default reactotron;
