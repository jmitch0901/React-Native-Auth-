import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import Button from '../common/button';


export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = { username:'', password:'',passwordConf:'', errorMessage:null };
  }


  _onSignInPress(){
    this.props.navigator.pop();
  }

  _onSignUpPress(){
    if(this.state.password !== this.state.passwordConf){
      return this.setState({errorMessage: 'Your Passwords don\'t match!'});
    }

    this.setState({errorMessage:null});
  }


  render(){
    return(
      <View style={styles.container}>
        <Text>Sign Up</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
        style={styles.input}
        value={this.state.username}
        onChangeText={text => this.setState({username: text})}
         />

        <Text style={styles.label}>Password:</Text>
        <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={text => this.setState({password: text})}
         />

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={this.state.passwordConf}
        onChangeText={text => this.setState({passwordConf: text})}
         />

         <Text>{ this.state.errorMessage }</Text>

        <Button text={'Submit'} onPress={this._onSignUpPress.bind(this)}></Button>
        <Button text={'Sign In'} onPress={this._onSignInPress.bind(this)}></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'white'
  },
  label:{
    fontSize: 18

  },
  input:{
    padding:4,
    height:40,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
    margin:5,
    width:200,
    alignSelf:'center'
  }
});
