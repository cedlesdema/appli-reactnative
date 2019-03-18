import React from 'react';
import {Platform} from "react-native";
import {createBottomTabNavigator} from "react-navigation";
import TabBarIcon from "../component/TabBarIcon";
import Colors from "../constants/Colors";

// Imports  des Navigators
import PlaygroundNavigator from "./PlaygroundNavigator";

// Imports screens
import EventListScreen from "../screens/EventListScreen";
import ProfileScreen from "../screens/ProfileScreen";

const tabBarDefaultOptions = {
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: Colors.primary,
        inactiveTintColor: Colors.secondary,
        inactiveBackgroundColor: 'white',
    }
};

export default  createBottomTabNavigator({
    Playground: {
        screen: PlaygroundNavigator,
        navigationOptions: {
            title: 'Playgrounds',
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon name={Platform.OS === 'ios' ? 'ios-basketball' : md-basketball}/>
            ),
            ...tabBarDefaultOptions
        }
    },
    Event: {
        screen: EventListScreen,
        navigationOptions: {
            title: 'Events',
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} color={tintColor} />
            ),
            ...tabBarDefaultOptions
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <TabBarIcon name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} color={tintColor} />
            ),
            ...tabBarDefaultOptions
        }
    }
});


