import React from "react";
import {createStackNavigator} from "react-navigation";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";

export default createStackNavigator({
  Login: LoginContainer,
  Signup: SignupContainer
});