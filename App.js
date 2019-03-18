import React from 'react';
import { View } from 'react-native';
import AppNavigator from "./navigation/AppNavigator";
import {Provider} from "react-redux";
import store from "./redux/store";
import {fetchPlaygrounds} from "./redux/actions";

store.dispatch(fetchPlaygrounds());

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <AppNavigator/>
                </View>
            </Provider>
        );
    }
}