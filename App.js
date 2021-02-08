import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Router from './router';


export default function App() {

  return (
    <NavigationContainer>
   <Router/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen:{
    paddingTop:40,
  }
});
