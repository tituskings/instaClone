import React from 'react';
import {View, Text, StyleSheet, FlatList,ScrollView} from 'react-native';
import Story from './Story';
import image from './data';

const data = {

}

const Stories = (props) => {
    return (
        <View style={styles.container} >
           <FlatList 
           data = {image}
           keyExtractor={({text})=> text}
           horizontal
           showsHorizontalScrollIndicator={false}
           renderItem={({item}) => <Story imagesUri={item.user.imagesUri} text={item.user.text}/>}
           />
        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:15
    }
});

export default Stories;