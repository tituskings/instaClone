
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeStackScreen from './Home.route';

import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();


const bottomHomeNavigator = () => (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
        return <Foundation name="home" size={size} color={color} />;
        }
        if (route.name === 'Discovery') {
        return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === 'Post') {
        return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === 'Notification') {
        return <AntDesign name="hearto" size={size} color={color} />;
        }
        if (route.name === 'Profile') {
        return <Ionicons name="person-outline" size={size} color={color} />;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: 'grey',
      showLabel:false,
    }}
>
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={CreatePostScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
)

export default bottomHomeNavigator;