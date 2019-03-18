import React from "react";
import {createStackNavigator} from "react-navigation";
import PlaygroundListContainer from "../containers/PlaygroundListContainer";
import PlaygroundAddContainer from "../containers/PlaygroundAddContainer";

export default createStackNavigator({
    PlaygroundList: PlaygroundListContainer,
    PlaygroundAdd: PlaygroundAddContainer
});