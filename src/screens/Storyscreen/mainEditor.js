import React from 'react';
import {SafeAreaView, Text, Image,View,StyleSheet,TouchableOpacity} from 'react-native';
import Images from '../../Assets/images';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Listscreen from './ActionCards';

const MainEditor = (props) => {

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{margin:7,backgroundColor:'white',height:'60%'}}>
        <Image source={Images.Cat} style={{height:150,width:120}}/>
        <Image source={Images.Ball} style={{height:80,width:90}}/>

        <TouchableOpacity style={{backgroundColor:'#5394fc',width:40,height:40,borderRadius:40/2,justifyContent:'center'}}>
           <Material name="play" size={30} color="#fff" style={{alignSelf:'center'}} />
         </TouchableOpacity>

         </View>
          <View style={{height:'10%',margin:7,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'500'}}>Sprit</Text>
          <Text style={{borderWidth:1,padding:1,borderRadius:10,paddingHorizontal:9}}>00</Text>
          <Text style={{fontSize:20,fontWeight:'500'}}>X</Text>
          <Text style={{borderWidth:1,padding:2,borderRadius:10,paddingHorizontal:9}}>00</Text>
          <Text style={{fontSize:20,fontWeight:'500'}}>Y</Text>
          <Text style={{borderWidth:1,padding:2,borderRadius:10,paddingHorizontal:9}}>00</Text>
         </View>
          <View style={{height:'20%',margin:7,backgroundColor:'white'}}>
         <Listscreen/>
        </View>
    </SafeAreaView>
  );
};

export default MainEditor;
