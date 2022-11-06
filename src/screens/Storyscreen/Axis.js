import { View, Text } from 'react-native'
import React from 'react'

const Axis = () => {
  return (
       <View style={{height:'10%',margin:7,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>Sprit</Text>
          <Text style={{borderWidth:1,padding:1,borderRadius:10,paddingHorizontal:9}}>00</Text>
          <Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>X</Text>
          <Text style={{borderWidth:1,padding:2,borderRadius:10,paddingHorizontal:9}}>00</Text>
          <Text style={{fontSize:20,fontWeight:'600',color:'#000'}}>Y</Text>
          <Text style={{borderWidth:1,padding:2,borderRadius:10,paddingHorizontal:9}}>00</Text>
         </View>
  )
}
export default Axis;