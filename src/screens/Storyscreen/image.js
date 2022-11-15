import { View, Text,Image,Animated, TouchableHighlight } from 'react-native'
import React, { useEffect } from 'react'
import Images from '../../Assets/images';
import { abs, Easing } from 'react-native-reanimated';
import Rotate from './rotate';
const CatImage = (function(){


    let rotateValueHolder = new Animated.Value(0);

    const startImageRotationFunction = () =>{
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder,{
            toValue:1,
            duration:3000,
            easing:Easing.linear,
            useNativeDriver:false
        }).start(()=>startImageRotationFunction().setValue(0))}

    const RotateData = rotateValueHolder.interpolate({
     inputRange:[0,1],
     outputRange:['0deg','360deg']
    });

    return (
        <View>
          <Animated.Image source={Images.Cat} style={{height:120,width:120,transform: [{ rotate: RotateData }]}} />
          <TouchableHighlight onPress={startImageRotationFunction}>
          <Text>Hello world</Text>
          </TouchableHighlight>
         </View>
  )
})();
export default CatImage;