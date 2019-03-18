import React, {Component} from 'react';
import {View, Text, Button} from "react-native";

class ProfileScreen extends Component {

    static navigationOptions = {
        title: "Profile",

    };

    render() {
        return (
            <View>
                <Text>ProfileScreen</Text>
            </View>
        );
    }
}

export default ProfileScreen;