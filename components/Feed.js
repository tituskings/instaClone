import React from 'react';
import { FlatList, View } from 'react-native';
import data from './data';
import Post from './post/Post';
import Stories from './Stories';


const Feed = () =>{
    return(
        <View>
            <FlatList
            data={data}
            keyExtractor={({text})=> text}
            renderItem={({item}) => <Post post={item}/>}
            ListHeaderComponent={Stories}
            />
        </View>
    );
};

export default Feed;