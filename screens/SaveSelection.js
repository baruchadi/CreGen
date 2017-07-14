import React from 'react';
import {AsyncStorage, Button, Text, View} from "react-native";
var s = require('../style');


export default class SaveSelection extends React.Component{

  static navigatorStyle = {
    navBarHidden: true
  };
  constructor(props) {
    super(props);
    this.state = {hasLoaded:false, rows:[]};
  }

 componentDidMount(){
    console.log(this.state);
  this.props.navigator.showModal({
      screen: "com.cregen.buffer", // unique ID registered with Navigation.registerScreen
      animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });console.log(this.state);
    
    
    this.loadRows();
    //this.complete();
  
  }

   loadRows(){
for(let i =0; i<3; i ++){
      AsyncStorage.getItem("@genCreature" + i, (err, result, n = 3) => {

      if(result ===null){
        console.log(this.state);
        this.state.rows.push(<Button style={s.saves} onPress={() => {Alert.alert("You tapped the button!");}} title="NEWGAME"/>);
      }else {
        rows.push(<Button style={s.saves} onPress={() => {Alert.alert("You tapped the button!");}} title="NEWGAME x"/>);
      }
      console.log(result);
      if(this.state.rows.length>n-1){
        this.complete();
      }
    });  
  
    }
  }

  complete(){
    this.state.hasLoaded =true;
    this.props.navigator.dismissModal({
      animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
    });
    console.log("completed");
    this.forceUpdate();
  }

  render(){
    if(!this.state.hasLoaded){
    return(
      <View style={s.container}>
        <Text style={s.title}>LOADING</Text>
        <View style={s.paddedCont}>
        {this.state.rows}
      </View>
      </View>
    );
    }
    else{
      return(
<View style={s.container}>
        <Text style={s.title}>Select a Save</Text>
        <View style={s.paddedCont}>
        {this.state.rows}
      </View>
      </View>
      );}
  }



}