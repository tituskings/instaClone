import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const Body= props => {
    return(
        <Image style = {styles.image} source={props.image} />
    );
};

const styles = StyleSheet.create({
    image:{
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').width
    }
});

export default Body;