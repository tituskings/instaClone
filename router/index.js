
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import bottomHomeNavigator from './bottomHomeNavigator.route';
import Storyscreen from '../screens/Storyscreen';

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen 
    name={'Home'} 
    component={bottomHomeNavigator}
    options={{
      headerShown:false
    }}
    />

    <RootStack.Screen 
    name={'Story'} 
    component={Storyscreen}
    options={{
      headerShown:false
    }}
    />
  
    </RootStack.Navigator>
)

export default Router;