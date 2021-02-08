import React from 'react';
import {View, Text, StyleSheet, FlatList,ScrollView} from 'react-native';
import Story from './UserStoryPreview';
import image from './data';

const data = {

}

const UserStoriesPreview = (props) => {
    return (
        <View style={styles.container} >
           <FlatList 
           data = {image}
           keyExtractor={({user :{id}})=> id}
           horizontal
           showsHorizontalScrollIndicator={false}
           renderItem={({item}) => <Story story={item}/>}
           />
        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:15
    }
});

export default UserStoriesPreview;