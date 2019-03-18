import React, {Component} from 'react';
import {View, Text, Button, FlatList} from "react-native";

class PlaygroundListScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Playgrounds",
            headerRight: (<Button title="Add Playground" onPress={() => navigation.navigate('PlaygroundAdd')} />)
        };
    };

    render() {

        const renderPlayground = ({ item }) => <Text>{item.title}</Text>;
        const keyExtractorPlayground = (item, index) => index.toString();

        return (
            <View>
                <Text>PlaygroundListScreen</Text>
                <FlatList data={this.props.playgrounds} renderItem={renderPlayground} keyExtractor={keyExtractorPlayground} />
            </View>
        );
    }
}

export default PlaygroundListScreen;
