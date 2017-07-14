'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
padding:40,


  },
  title:{
    flex:.2,
    alignSelf:'center',

    fontSize:40,

  },
  play:{
    flex:.6,
marginBottom:100,
  },
  footer:{
    flex:.2,
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  saves:{
    flex:.2,
    marginBottom:20,
  },paddedCont:{
    marginBottom:100,
    flex:.8,
    justifyContent:'space-between'
  },
  buffer: {
    flex:.8,
    backgroundColor:'rgba(0,0,0,.8)',

   alignItems: 'center',
   justifyContent: 'center',
   paddingBottom: 40,
 },whiteText:{
   color:'white',
 }

});
