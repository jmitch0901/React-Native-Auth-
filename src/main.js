import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';

const routes = {
  signIn: SignIn,
  signUp: SignUp
};

export default class Main extends Component{

  _renderScene(route, navigator){
    const Component = routes[route.name];
    return <Component route={route} navigator={navigator} />;
  }

  render(){
    return(
      <Navigator
        style={styles.container}
        initialRoute={{name:'signIn'}}
        renderScene={this._renderScene}
        configureScheme={ () => { return Navigator.SceneConfigs.FloatFromRight } }
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
