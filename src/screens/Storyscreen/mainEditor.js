import React,{useState} from 'react';
import {SafeAreaView, Text, Image,View,StyleSheet,TouchableOpacity} from 'react-native';
import Images from '../../Assets/images';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Listscreen from './ActionCards';
import TopBar from '../../common/topbar';
import Draggable from 'react-native-draggable';
import Axis from './Axis';
import { moveX50 } from '../../utils/actions';
import CatImage from "./image";

const MainEditor = (props) => {
 
  const [xAxis,setxAxis]=useState(0);
  const [yAxis,setyAxis]=useState(0); 
 
  const [xValue, setXValue]= useState(0)

  const playHandler = () =>{
      const x = moveX50(xAxis);
      // moveX50(xAxis,yAxis)
      setxAxis(x);
      setXValue(x);
  };

  return (
    <>
    <TopBar/>
    <SafeAreaView style={{flex: 1}}>
        <View style={{margin:7,backgroundColor:'white',height:'60%'}}>
        <Draggable children={CatImage}
        // imageSource={Images.Cat} 
        x={xValue} y={0}
         onDragRelease={(event,gestureHandlers)=>
          {
          setxAxis(gestureHandlers.moveX),
         
          setyAxis(gestureHandlers.moveY)
          
        }}  
          minX={5} minY={0} maxX={300} maxY={350}  renderSize={120}/>
            {/* <Image source={Images.Cat} style={{height:120,width:120}} /> */}
           

        {/* <Draggable axisy={yAxis} imageSource={Images.Ball} x={200} y={300}
         onDragRelease={(event,gestureHandlers)=>
         {console.log('ajit bhai------',gestureHandlers.moveY);} 
        //  setyAxis(gestureHandlers.moveY)
        }
          minX={5} minY={5} maxX={380} maxY={380} renderSize={80}  /> */}

        <TouchableOpacity onPress={playHandler} style={{backgroundColor:'#5394fc',width:40,height:40,borderRadius:40/2,justifyContent:'center',position:"absolute",bottom:11,right:8}}>
           <Material name="play" size={30} color="#fff" style={{alignSelf:'center'}} />
         </TouchableOpacity>
         
         <TouchableOpacity style={{backgroundColor:'green',width:36,height:36,borderRadius:36/2,justifyContent:'center',position:"absolute",top:5,right:8}}>
           <FA5 name="reply" size={18} color="#fff" style={{alignSelf:'center'}} />
         </TouchableOpacity>

         </View>
         <Axis/>
          <View style={{height:'20%',margin:7,backgroundColor:'white'}}>
         <Listscreen/>
        </View>
    </SafeAreaView>
    </>
  );
};

export default MainEditor;
