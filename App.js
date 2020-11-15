/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//making user define components
const Mydata =()=>{
  return(
    <Text>Hello World!</Text>
  )
}

class App extends React.Component{
render(){

  const arr =['Eat', 'Sleep', 'Code'];

  return(
    <View style = {styles.container}>
    {/* <Text> {Math.E}</Text> */}
    {
      arr.map(data=>{
        return <View>
          <Text> {data}</Text> 
          {/*<Mydata /> calling user define components*/}
          </View>
    })
  }
    </View>
  );
}
}
export default App;


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
});


