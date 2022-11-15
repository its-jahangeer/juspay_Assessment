import React, { useEffect, useState } from 'react'
import { View,Animated,TouchableHighlight,Text } from 'react-native';
import Images from '../../Assets/images';
import { abs, Easing, Value } from 'react-native-reanimated';


const Rotate = (props) => {
    
    const [controller,setController]=useState(new Animated.Value(0));
   
     console.log(props.height);
     console.log(props.width);
    
    // let rotateValueHolder = new Animated.Value(0);

    // useEffect(()=>{
    //   startImageRotationFunction();

    //   setTimeout(()=>{
    //     setController(0);
    //   },2000);
    // });

    const startImageRotationFunction = () =>{
        controller.setValue(0);
        Animated.timing(controller,{
            toValue:1,
            duration:3000,
            easing:Easing.linear,
            useNativeDriver:false
        }).start(()=>controller.setValue(0))
    }

    const RotateData = controller.interpolate({
     inputRange:[0,1],
     outputRange:['0deg','360deg']
    });
  return (
    <View>
        <Animated.Image source={Images.Cat} style={{height:props.height,width:props.width,transform: [{ rotate: RotateData }]}} />
        <TouchableHighlight onPress={startImageRotationFunction}>
          <Text>Hello world</Text>
          </TouchableHighlight>
    </View>
  )
}

export default Rotate;