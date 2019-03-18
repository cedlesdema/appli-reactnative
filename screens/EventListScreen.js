import React, {Component} from 'react';
import {View, Text, Button} from "react-native";


class EventListScreen extends Component {

    static navigationOptions = {
        title: "Events",

    };

    render() {
        return (
            <View>
                <Text>EventListScreen</Text>
            </View>
        );
    }
}

export default EventListScreen;