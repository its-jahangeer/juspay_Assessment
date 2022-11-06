import React,{useState} from 'react';
import {SafeAreaView, Text, Image,FlatList,View, TouchableOpacity} from 'react-native';
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import DraggableFlatList from 'react-native-draggable-flatlist';

const Listscreen = () => {

  const data = ["Move X to 50","Move Y to 50","Rotate 360","go to (0,0)","Move X=50,y=50","go to random position","Say Hello","Say Hello For 1 Sec","Increase Size","Dec Size","Repeat"];
  
  const [ flatlistData, setflaListData ] = useState(data);

   const renderList = ({ item, index,drag, isActive  }) => {
       
        return (
            <TouchableOpacity style={{backgroundColor:'#65b2db',margin:5}} onLongPress={drag}>
                 <Text style={{fontSize:12,color:'white',textAlign:'center'}}>{item}</Text>
            </TouchableOpacity>
        )
    }
  return(
     <SafeAreaView>
      <View style={{justifyContent:'center',borderBottomWidth:0.8,flexDirection:'row'}}>
      <Material name="approximately-equal" size={25} color="#5394fc" style={{alignSelf:'center'}} />
        <Text style={{textTransform:'uppercase',fontSize:16,color:'#5394fc',fontWeight:'800'}}>Code</Text>
      </View>
    {/* <FlatList
     horizontal={false}
     data={data}
     renderItem={renderList}
     keyExtractor={(item, index) => index.toString()}
     showsHorizontalScrollIndicator={false}
                /> */}
      <DraggableFlatList
        data={flatlistData}
        renderItem={renderList}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ d }) => setflaListData(()=>{console.log('presed');})}
      />
                
  </SafeAreaView>);
};

export default Listscreen;
