import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.screen}>
    
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    paddingTop:40,
  }
});
