import React from 'react';
import { StyleSheet, Text, TextxtText, View } from 'react-native';
import Profilepicture from '../Profilepicture';
import { Entypo } from '@expo/vector-icons';


const Header=({imagesUri , text}) => {
    return(
        
        <View style={styles.container}>
            <View style={styles.left}>
            <Profilepicture image={imagesUri} size={40}/>
            <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.right}>
            <Entypo name="dots-three-vertical" size={24} color="gray" />
           </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:4,
    },
    left:{
        flexDirection:'row',
       
    },
    right:{
        marginRight:15,
    },
    text:{
        alignSelf:'center',
        fontWeight:'bold',
        color:'#383631',
    }

});

export default Header;