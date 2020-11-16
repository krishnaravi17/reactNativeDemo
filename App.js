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
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//method based -making user define components
//const Mydata =()=>{
 // return(
  //  <Text>Hello World!</Text>
 // )
//}
//method based -making user define components
class Mydata extends React.Component{
  render(){
    return(
      //<Text>Hello World!</Text> //static 

      <View>
      <Text>{this.props.name}</Text> 
      <Text>{this.props.status}</Text>
      </View>
  
    )
  }
}

class App extends React.Component{
  state = {
    name:"mukesh",
    status:"dancer"
  }
  handleST(){
    this.setState(
      {
        name:"Ravi"
      }
    )
  }
render(){

 // const arr =['Eat', 'Sleep', 'Code'];

  return(
    <View style = {styles.container}>
    {/* <Text> {Math.E}</Text> 
     {
      arr.map(data=>{
        return <View>
          <Text> {data}</Text> 
          {/*<Mydata /> calling user define components}
          </View>
    })
  }
  <Mydata name="ravi" status="coder"/>
    */}
   
  <Text>{this.state.name}</Text> 
  <Text>{this.state.status}</Text> 
  <Button title="CLICK ME" onPress={this.handleST.bind(this)} />
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


