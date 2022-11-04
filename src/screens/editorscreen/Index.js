import React from 'react';
import {SafeAreaView, Text, Image,View,StyleSheet} from 'react-native';
import Images from '../../Assets/images';
import DragActions from './dragActions';
import Listscreen from './listscreen';

const Editor = (props) => {

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1,flexDirection:'row',padding:6,justifyContent:'space-between'}}>
      <View style={{borderWidth:0.5,flex:1,}}> 
      <Listscreen/>
      </View>
      <View style={{borderWidth:0.5,flex:1}}>
      <DragActions/>
      </View> 
       {/* <Image source={Images.Cat} style={{height:150,width:120}}/>
      <Image source={Images.Ball} style={{height:80,width:90}}/> */}
    </SafeAreaView>
  );
};

export default Editor;
