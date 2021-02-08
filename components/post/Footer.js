import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Footer = ({likesCount:likescountProps,caption,date}) => {

const [ isLiked, setIsLiked] = useState(false);
const [ likesCount, setIsLikedCount] = useState(0);

const isLikePress =( )=>{
    setIsLiked(!isLiked);
    
    const amount = isLiked ? -1 : 1;
    setIsLikedCount(likesCount + amount);
}

useEffect(()=>{
setIsLikedCount(likescountProps);
},[])


    return(
       <View style = {styles.container}>
        <View style={styles.iconContainer}>
        <View style={styles.left}>
        <TouchableWithoutFeedback onPress={isLikePress}>
        { isLiked ?  
        <AntDesign name="hearto" size={24} color="red" />:
        <AntDesign name="hearto" size={24} color="#545454" />}
        </TouchableWithoutFeedback>
        <FontAwesome5 name="comment" size={24} color="#545454" />
        <Ionicons name="paper-plane-outline" size={24} backgroundColor="#545454" />
        </View>
        <View>
        <FontAwesome name="bookmark-o" size={24} color="#545454" />
        </View>
        </View>

       <Text style = {styles.likes}> {likesCount} likes</Text>
        <Text style = {styles.cap}>{caption}</Text>
       <Text style = {styles.date}>{date}</Text>

       </View>
    );
};

const styles = StyleSheet.create({
    container:{
        margin:8
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5
    },
    left:{
        flexDirection:'row',
        width:100,
        justifyContent:'space-between'
    },
    likes:{
       fontWeight:'bold' 
    },

    date:{
        color:'#94938f'
    }
});

export default Footer;