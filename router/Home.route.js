import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import Storyscreen from "../screens/Storyscreen";
import logo from "../images/logo.png";

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();

const HomeRoute = () => (
    <HomeStack.Navigator>
    <HomeStack.Screen 
    name="Home"
   component={HomeScreen}
   options={{
    headerTitleContainerStyle: { alignItems:'center'},

     title:'InstaAddit',

     headerLeftContainerStyle:{
       marginLeft:15
     },
     headerRightContainerStyle:{
       marginRight:15,
     },
     headerLeft: ()=> (
         <Feather name="camera" size={25} color={'#000'} />
     ),
     headerRight: () => (
      <Ionicons name="paper-plane-outline" size={24} backgroundColor="#545454" />

     ),
     headerTitle:() => (
       <Image source={logo} resizeMode="contain" style={{width:120, height:50}}/>
     ),
   }}
   />

  </HomeStack.Navigator>
)

export default HomeRoute;