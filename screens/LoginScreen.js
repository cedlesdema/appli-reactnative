import React, {Component} from 'react';
import {View, Text, Button} from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>LoginScreen</Text>
        <Button title='Login' onPress={() => this.props.navigation.navigate('Main')}/>
      </View>
    );
  }
}

export default LoginScreen;