import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import Button from '../common/button';

export default class SignIn extends Component {

  constructor(props){
    super(props);
    this.state = { username:'', password:'' };
  }

  _onSubmit(){

  }

  _onSignUpPress(){
    this.props.navigator.push({name:'signUp'});
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
        onChangeText={value => this.setState({username:value})}
        value={this.state.username}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input} />

        <Text style={styles.label}>Password:</Text>
        <TextInput
        onChangeText={value => this.setState({password:value})}
        value={this.state.password}
        secureTextEntry={true}
        style={styles.input} />

        <Button text="Sign In" onPress={this._onSubmit.bind(this)} />
        <Button text="Sign Up" onPress={this._onSignUpPress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height:40,
    borderColor: 'gray',
    borderWidth:1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
