import React, { Component, useState,useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {View, Text,StyleSheet, ImageBackground, ActivityIndicator, Button, Dimensions} from 'react-native';
import storiesData from '../components/data'; 
import { TouchableWithoutFeedback } from 'react-native';
import Profilepicture from '../components/Profilepicture';
import { TextInput } from 'react-native-gesture-handler';


import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Storyscreen = () =>{

  const [userStories, setUserStories]= useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;
  
  

  useEffect( () =>{
    const userStories =storiesData.find(storyData => storyData.user.id === userId);
    setUserStories(userStories);
    console.log(userStories);
    setActiveStoryIndex(0);
  },[])

  const navigateToNextUser = () => {
    navigation.push("Story", {userId:(parseInt(userId) + 1).toString()});
  }

  const navigateToPrevUser = () => {
    navigation.push("Story", {userId:(parseInt(userId) - 1).toString()});
  }

  const handleNextStory = () => {
    if(activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  }

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0){
      navigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  }
  console.log(userId);
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    

    if( x < screenWidth / 2) {
      handlePrevStory();
    }else{
      handleNextStory();
    }
  }

  
  if(!userStories){
    return (
      <View style={styles.screen}>
       <ActivityIndicator/>
      </View>
    )
  }

  const activeStory =  userStories.stories[activeStoryIndex];  

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={handlePress} style={styles.screen}>

      <ImageBackground source={activeStory.imagesUri} style={styles.image}>
        <View style={styles.userinfo}>
        <Profilepicture image={userStories.user.imagesUri}/>
        <Text style={styles.username}>{userStories.user.name}</Text>
        <Text style={styles.postTime}>{activeStory.time}</Text>
        
        </View>
        <View style={styles.bottonContainer}>
          <View style={styles.cameraButton}>
          <Feather name="camera" size={30} color={'white'} />
          </View>
        <View style={styles.textInputContainer}>
          <TextInput editable placeholder="Send a message" style={styles.textInput} />
        </View>
        <View style={styles.messageButton}>
        <Ionicons name="paper-plane-outline" size={30} color="white" /> 
        </View>
        </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
     
    </View>
)
}


const styles = StyleSheet.create({
    screen:{
      paddingTop:40,
      height:"100%",
    },
    image:{
      flex:1,
      resizeMode:'cover',
      justifyContent:'center',
      width:'100%',
      justifyContent:'space-between'

    },
    userinfo:{
      flexDirection:'row',
      alignItems:"center",
      marginTop:10
    },
    username:{
      color:'white',
      fontWeight:'500',
      fontSize:18
    },
    postTime:{
      color:"grey",
      fontWeight:'500',
      fontSize:14,
      marginLeft:10
    },
    bottonContainer:{
      flexDirection:"row"
    },
    textInputContainer:{
      flex:1,
      borderWidth:1,
      borderColor:'white',
      marginHorizontal:10,
      paddingHorizontal:10,
      borderRadius:50,
      height:50
    },
    cameraButton:{
      width:50,
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderColor:'white',
      borderRadius:50,
    },
    messageButton:{
      width:50,
      alignItems:'center',
      justifyContent:'center'
    },
    bottonContainer:{
      flexDirection:'row',
      marginBottom:20
    },
    textInput:{
      height:"100%",
      color:'white',
      fontSize: 16
    }

  });

export default Storyscreen;