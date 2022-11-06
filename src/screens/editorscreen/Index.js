import React from 'react';
import {SafeAreaView, Text, Image,View,StyleSheet} from 'react-native';
import Images from '../../Assets/images';
import TopBar from '../../common/topbar';
import DragActions from './dragActions';
import Listscreen from './listscreen';
import FuncExample from './trail';

const Editor = (props) => {

 const back = () =>{
  props.navigation.navigate('MainEditor');
  // console.log('presseddddd');
 }

 const ToEditor = () =>{
  props.navigation.navigate('MainEditor');
  // console.log('presseddddd');
 }

  return (
    <>
    <TopBar title={'actions'} actionfire={back} done={ToEditor} />
    <SafeAreaView style={{backgroundColor: 'white', flex: 1,flexDirection:'row',padding:3,justifyContent:'space-between'}}>
      <View style={{borderWidth:0.6,flex:1,borderRadius:5}}> 
      <Listscreen/>
      </View>
      <View style={{borderWidth:0.6,flex:1,borderRadius:5}}>
      <DragActions/>
      </View> 
       {/* <FuncExample/> */}
    </SafeAreaView>
    </>
  );
};

export default Editor;
