import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post= ({post})=> {
    
    return(
        <View>
            <Header imagesUri={post.user.imagesUri} text={post.user.text}/>
            <Body image={post.postData.imagesUri}/>
            <Footer 
            likesCount={post.postData.likes} 
            caption={post.postData.caption} 
            date={post.postData.time}/>
        </View>
    );
};

export default Post;