import React, {Component} from 'react';
import {View, Text, TextInput, Button} from "react-native";
import {Permissions, ImagePicker} from "expo";
import * as mime from 'react-native-mime-types';

class PlaygroundAddScreen extends Component {

  static navigationOptions = {
    title: "Add Playground"
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image: null,
      lat: null,
      lng: null
    };
  }

  async handleImage() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if(status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        this.setState({ image: result });
      }
    }
  }

  handleSubmit() {
    const data = new FormData();

    data.append('title', this.state.title);
    data.append('description', this.state.description);
    data.append('image', {
      uri: this.state.image.uri,
      name: this.state.image.uri.replace(/^.*[\\\/]/, ''),
      type: mime.lookup(this.state.image.uri)
    });
    data.append('lat', this.state.lat);
    data.append('lng', this.state.lng);

    this.props.addPlayground(data);
  }

  render() {
    return (
      <View>
        <Text>PlaygroundAddScreen</Text>
        <TextInput placeholder='Title' value={this.props.title} onChangeText={text => this.setState({ title: text })}/>
        <TextInput placeholder='Description' value={this.props.description} onChangeText={text => this.setState({ description: text })}/>
        <Button title='Image' onPress={() => this.handleImage()} />
        <TextInput placeholder='Latitude' value={this.props.lat} onChangeText={text => this.setState({ lat: text })}/>
        <TextInput placeholder='Longitude' value={this.props.lng} onChangeText={text => this.setState({ lng: text })}/>
        <Button title='Enregistrer' onPress={() => this.handleSubmit()}/>
      </View>
    );
  }
}

export default PlaygroundAddScreen;