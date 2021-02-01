import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post= ({post})=> {
    return(
        <View>
            <Header imagesUri={post.user.imagesUri} text={post.user.text}/>
            <Body image={post.imagesUri}/>
            <Footer likesCount={post.likes} caption={post.caption} date={post.date}/>
        </View>
    );
};

export default Post;