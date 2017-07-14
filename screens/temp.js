import React from "react";
import { Button, Alert, Text, View } from "react-native";
var s = require("../style");

export default class SaveSelection extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.navigator.showModal({
      screen: "com.cregen.buffer", // unique ID registered with Navigation.registerScreen
      animationType: "slide-up" // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    });
    this.LoadSaves(3, this.props.navigator);
  }
  render() {
    return (
      <View style={s.container}>
        <Text style={s.title}>Load Saves</Text>
      </View>
    );
  }


done = false;

getButtons(props) {
  if (this.done)
    return (
      <View style={s.paddedCont}>
        {this.rows}
      </View>
    );
  else {
    return <View style={s.paddedCont} />;
  }
}
rows = [];
LoadSaves(props, nav) {
  var count = 0;
  for (var i = 0; i < props; i++) {
    (function(foo, n) {
      n(foo, function(err, response) {
        this.rows.push(response);
        count++;
        if (count > props - 1) complete(nav);
      });
    })(i,this.CheckSave);
  }
}

complete(nav) {
  nav.dismissModal({
    animationType: "slide-down" // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
  });
  this.done = true;
}

async CheckSave(id, fn) {
  try {
    const value = await AsyncStorage.getItem("@genCreature" + id)
    .then((result) => {
      console.log(result)
    })
    if (value !== null) {
      Alert.alert("not NULL");
      fn(
        0,
        <Button
          style={s.saves}
          onPress={() => {
            Alert.alert("You tapped the button!");
          }}
          title="NEWGAME s"
        />
      );
    }
  } catch (err) {
    throw err;
  }
  fn(
    0,
    <Button
      style={s.saves}
      onPress={() => {
        Alert.alert("You tapped the button!");
      }}
      title="NEWGAME x"
    />
  );
}

}


function toSaveSelect() {}
