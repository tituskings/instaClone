import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';


import Profilepicture from './Profilepicture';


const UserStoryPreview = props => {
const navigation = useNavigation();
const {
    story:{
        user:{
            id,
            imagesUri,
            name
        }
    }
} = props;

    const onPress = () =>{
       navigation.navigate('Story',{userId:id});
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Profilepicture image={imagesUri}/>
            <Text style={{textAlign:'center'}}>{name}</Text>
    
        </TouchableOpacity>
    );
}

export default UserStoryPreview;