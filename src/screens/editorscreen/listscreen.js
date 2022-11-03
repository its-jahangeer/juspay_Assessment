import React from 'react';
import {SafeAreaView, Text, Image,FlatList,View, TouchableOpacity} from 'react-native';

const Listscreen = () => {

    const data = ["Move X to 50","Move Y to 50","Rotate 360","go to (0,0)","Move X=50,y=50","go to random position","Say Hello","Say Hello For 1 Sec","Increase Size","Dec Size","Repeat"];

   const renderList = ({ item, index }) => {
       
        return (
            <TouchableOpacity style={{backgroundColor:'#65b2db',margin:5}}>
                 <Text style={{fontSize:12,color:'white',textAlign:'center'}}>{item}</Text>
            </TouchableOpacity>
        )
    }
  return <SafeAreaView>
    <FlatList
     horizontal={false}
     data={data}
     renderItem={renderList}
     keyExtractor={(item, index) => index.toString()}
     showsHorizontalScrollIndicator={false}
                />
                
  </SafeAreaView>;
};

export default Listscreen;
