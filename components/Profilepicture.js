import React from 'react';
import { Image ,StyleSheet, View} from 'react-native';

const Profilepicture = ({image, size=60}) => {
    return(
        <View style= {[styles.container, {width: size +6, height: size +6}]}>

            <Image 
            style={[styles.pics,{ height:size , width: size}]}
            source={image}/>
        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
   
        marginHorizontal:7,
        marginVertical:4,
        borderRadius:33,
        borderWidth:3,
        borderColor:'#ac16de'
    },
    pics:{

      borderRadius:30,
      borderWidth:1,
      borderColor:'#ffffff'
  }
});

export default Profilepicture;