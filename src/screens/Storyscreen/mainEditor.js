import React from 'react';
import {SafeAreaView, Text, Image,View,StyleSheet,TouchableOpacity} from 'react-native';
import Images from '../../Assets/images';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Listscreen from './ActionCards';
import TopBar from '../../common/topbar';
import Draggable from 'react-native-draggable';


const MainEditor = (props) => {

  return (
    <>
    <TopBar/>
    <SafeAreaView style={{flex: 1}}>
        <View style={{margin:7,backgroundColor:'white',height:'60%'}}>
        <Draggable imageSource={Images.Cat} x={75} y={100}  renderSize={120} onShortPressRelease={()=>alert('touched!!')}/> 
        <Draggable imageSource={Images.Ball} x={200} y={300} renderSize={80}  />
        {/* <Draggable/>
    <Draggable x={50} y={50}>
       
    </Draggable> */}

        <TouchableOpacity style={{backgroundColor:'#5394fc',width:40,height:40,borderRadius:40/2,justifyContent:'center',position:"absolute",bottom:11,right:8}}>
           <Material name="play" size={30} color="#fff" style={{alignSelf:'center'}} />
         </TouchableOpacity>
         
         <TouchableOpacity style={{backgroundColor:'green',width:36,height:36,borderRadius:36/2,justifyContent:'center',position:"absolute",top:5,right:8}}>
           <FA5 name="reply" size={18} color="#fff" style={{alignSelf:'center'}} />
         </TouchableOpacity>

         </View>
          <View style={{height:'10%',margin:7,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>Sprit</Text>
          <Text style={{borderWidth:1,padding:1,borderRadius:10,paddingHorizontal:9}}>00</Text>
          <Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>X</Text>
          <Text style={{borderWidth:1,padding:2,borderRadius:10,paddingHorizontal:9}}>00</Text>
          <Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>Y</Text>
          <Text style={{borderWidth:1,padding:2,borderRadius:10,paddingHorizontal:9}}>00</Text>
         </View>
          <View style={{height:'20%',margin:7,backgroundColor:'white'}}>
         <Listscreen/>
        </View>
    </SafeAreaView>
    </>
  );
};

export default MainEditor;
