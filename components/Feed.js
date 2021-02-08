import React from 'react';
import { useReducer } from 'react';
import { FlatList, View } from 'react-native';
import data from './data';
import Post from './post/Post';
import Stories from './UserStoriesPreview';


const Feed = () =>{
    
    return(
        <View>
            <FlatList
            data={data}
            keyExtractor={(user)=> user.id}
            renderItem={({item}) => <Post post={item}/>}
            ListHeaderComponent={Stories}
            />
        </View>
    );
};

export default Feed;