import React from 'react'
import {
    SafeAreaView,Text,Image
  } from 'react-native';
  import Images from "../../Assets/images";


const Editor = (props) => {
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <Image source={Images.Cat} style={{height:150,width:120}}/>
      <Image source={Images.Ball} style={{height:80,width:90}}/>
    </SafeAreaView>
  )
}

export default Editor;