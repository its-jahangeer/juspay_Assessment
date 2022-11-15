import React,{useState,useEffect} from 'react';
import {SafeAreaView, View,TouchableOpacity,Text} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Listscreen from './ActionCards';
import TopBar from '../../common/topbar';
import Draggable from 'react-native-draggable';
import Axis from './Axis';
import { useContext } from 'react/cjs/react.development';
import ActionContext from '../../store/action-context';
import functionList from '../../utils/actions';
import CatImage from './image';
import { color, hp,wp } from '../../common/themeHelper';
import Listscreen2 from './ActionCard1';
import Rotate from './rotate';

const MainEditor = (props) => {
 
const [xAxis,setxAxis]=useState(0);
const [yAxis,setyAxis]=useState(0); 
const [xAxisRandom,setXAxisRandom]=useState(0);
const [yAxisRandom,setYAxisRandom]=useState(0);
const [hello, setHello]= useState(0);
const [increaseHeight,setIncreaseHeight]=useState(120);
const [increaseWidth,setIncreaseWidth]=useState(120);

  const playHandlerX = () =>{
    setxAxis(xAxis + 50);
  };
  
  const playerHandlerY = () =>{
    setyAxis(yAxis + 50);
  };

  const XY0 = () =>{
    setxAxis(0);
    setyAxis(0);
  }

  const X50Y50 = () =>{
    setxAxis(50);
    setyAxis(50);
  }

  // const RandomPosition = () =>{
  //   setXAxisRandom(parseFloat(Math.random() * 10).toFixed(0));
  //           setxAxis(xAxisRandom);
  //       console.log('X axis',xAxisRandom);
  //   setYAxisRandom(parseFloat(Math.random() * 10).toFixed(0));
  //          setyAxis(yAxisRandom);
  //       console.log('Y axis',yAxisRandom);
  // }

  const increaseDecFunc = ()=> {
    setIncreaseHeight(increaseHeight + 5);
    setIncreaseWidth(increaseWidth + 5);
  }

  const DecFunc = ()=> {
    setIncreaseHeight(increaseHeight - 5);
    setIncreaseWidth(increaseWidth - 5);
  }
  
  const ctx = useContext(ActionContext);

  const play = (item) => {
    // const selectedList = ctx.selectedActionList;
    // selectedList.forEach(item => {
    //   const fnName = item.id;
    //   functionList[fnName](item);
    // });
    // functionList[item]();
    console.log('pressed');
  }
   
//   const HandleHello = ()=>{
//     setHello(1);
//   }

//   const HandleHellofor1 = ()=>{
//     setHello(1);
//   }

//  useEffect(
//   () => {
//   setTimeout(() => {
//     setHello(0);
//   }, 1000)
// });


 

  return (
    <>
    <TopBar/>
    <SafeAreaView style={{flex: 1}}>
        <View style={{margin:7,backgroundColor:'white',height:'60%',borderWidth:1}}>
       {hello===1?<View style={{backgroundColor:color.Bluecolor,justifyContent:'center',borderRadius:12,height:hp(4),width:wp(14)}}>
          <Text style={{textAlign:'center',color:color.Themecolor,fontSize:14}}>Hello!</Text>
        </View>:null}
        <Draggable x={xAxis} y={yAxis} minX={10} minY={10} maxX={300} maxY={300} renderSize={120} 
          onDragRelease={(event,gestureHandlers)=>
          {
          setxAxis(gestureHandlers.moveX),
          setyAxis(gestureHandlers.moveY)
          
        }}>
          <Rotate height={increaseHeight} width={increaseWidth} />
          </Draggable> 

        <TouchableOpacity style={{backgroundColor:'#5394fc',width:40,height:40,borderRadius:40/2,justifyContent:'center',position:"absolute",bottom:11,right:8}}
          onPress ={play('moveX50')}>
           <Material name="play" size={30} color="#fff" style={{alignSelf:'center'}} />
         </TouchableOpacity>
         
         <TouchableOpacity style={{backgroundColor:'green',width:36,height:36,borderRadius:36/2,justifyContent:'center',position:"absolute",top:5,right:8}} >
           <FA5 name="reply" size={18} color="#fff" style={{alignSelf:'center'}} />
         </TouchableOpacity>

         </View>
         <Axis xdata={xAxis} ydata={yAxis} />
          <View style={{height:'20%',margin:7,backgroundColor:'white'}}>
         <Listscreen/>
         {/* <Listscreen2/> */}
        </View>
       
    </SafeAreaView>
    </>
  );
};

export default MainEditor;
