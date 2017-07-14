 import React from 'react';
import {Button,Alert, H1,Text, View} from 'react-native';
var s = require('../style');

export default class WelcomeScreen extends React.Component{
  static navigatorStyle = {
      navBarHidden: true,
    };
    constructor(props) {
      super(props);
    }
  change(){
      this.props.navigator.push({
  screen: 'com.cregen.saveselect', // unique ID registered with Navigation.registerScreen
  animated: true, // does the push have transition animation or does it happen immediately (optional)
  animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
  navigatorStyle: {navBarHidden: true},
});
    }
  render(){
    return(
      <View style={s.container}>
      <Text style={s.title}>CreGen 0.0</Text>

      <Button
      style={s.play}
        onPress={()=>this.change()}
        title="START"
      />
      <View style={s.footer}>
      <Text >Baruch Hen 2017©</Text></View>
      </View>
    );
  }
}

function toSaveSelect(){

}
