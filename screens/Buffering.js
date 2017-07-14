import React from 'react';
import {ActivityIndicator,Button,Alert, H1,Text, View} from 'react-native';
var s = require('../style');

export default class Buffering extends React.Component{
 static navigatorStyle = {
     navBarHidden: true,
   };
   constructor(props) {
     super(props);
   }

 render(){
   return(
     <View   style={s.buffer}>
     <Text style={s.whiteText}>
LOADING...
     </Text>
     <ActivityIndicator
        animating={true}

        size="large"
      />
      </View>
   );
 }
}
