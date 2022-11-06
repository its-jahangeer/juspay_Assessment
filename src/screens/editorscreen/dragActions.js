import React, { useState } from 'react';
import {SafeAreaView, Text, Image,View, TouchableOpacity} from 'react-native';
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const DragActions = () => {
  const [isActive, setActive]=useState(false);

  const HandleClick = ()=>{
    setActive(true);
  }
  const HandleClick2 = ()=>{
    setActive(false);
  }
  return (
    <>
    <View style={{justifyContent:'center',borderBottomWidth:0.8,flexDirection:'row'}}>
    <Material name="flag-variant" size={25} color="green" style={{alignSelf:'center'}} />
        <Text style={{textTransform:'uppercase',fontSize:16,color:'green',fontWeight:'800'}}>Action</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <TouchableOpacity onPress={HandleClick} style={{backgroundColor:isActive?'green':'grey',flex:1}}>
        <Text style={{color:"white",fontSize:16,textAlign:'center'}}>Action1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={HandleClick2} style={{backgroundColor:isActive?'grey':'green',flex:1}}>
        <Text style={{color:"white",fontSize:16,textAlign:'center'}}>Action2</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default DragActions;
