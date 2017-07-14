/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Navigation} from 'react-native-navigation'
import {registerScreens} from './screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen:{
    screen:'com.cregen.welcome',

    navigatorStyle:{},
    navigatorButtons:{}
  },
  appStyle: {
    orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
  },
  passProps:{},
  animationType:'slide-down'
});
