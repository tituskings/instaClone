import React from 'react';
import {View, Text} from 'react-native';
import Profilepicture from './Profilepicture';

const Story = props => {
    return (
        <View >
            <Profilepicture image={props.imagesUri}/>
            <Text style={{textAlign:'center'}}>{props.text}</Text>
        </View>
    );
}

export default Story;