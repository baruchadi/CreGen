import {Navigation} from 'react-native-navigation';

import WelcomeScreen from './WelcomeScreen';
import SaveSelection from './SaveSelection';
import Buffering from './Buffering';

export function registerScreens(){
  Navigation.registerComponent('com.cregen.welcome',()=>WelcomeScreen);
  Navigation.registerComponent('com.cregen.saveselect',()=>SaveSelection)
  Navigation.registerComponent('com.cregen.buffer',()=>Buffering)
}
