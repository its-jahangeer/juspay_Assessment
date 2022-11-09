import React from 'react';
import {SafeAreaView, View,TouchableOpacity} from 'react-native';
import Images from '../../Assets/images';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Listscreen from './ActionCards';
import TopBar from '../../common/topbar';
import Draggable from 'react-native-draggable';
import Axis from './Axis';
import { useContext } from 'react/cjs/react.development';
import ActionContext from '../../store/action-context';
import functionList from '../../utils/actions';


const MainEditor = (props) => {

  const ctx = useContext(ActionContext);

  const play = () => {
    const selectedList = ctx.selectedActionList;
    selectedList.forEach(item => {
      const fnName = item.id;
      functionList[fnName]();
    });
  }
  return (
    <>
    <TopBar/>
    <SafeAreaView style={{flex: 1}}>
        <View style={{margin:7,backgroundColor:'white',height:'60%'}}>
        <Draggable imageSource={Images.Cat} x={75} y={100}  renderSize={120} onDragRelease={(event)=>alert(event.left)}/> 

        <TouchableOpacity style={{backgroundColor:'#5394fc',width:40,height:40,borderRadius:40/2,justifyContent:'center',position:"absolute",bottom:11,right:8}}
          onPress ={play}>
           <Material name="play" size={30} color="#fff" style={{alignSelf:'center'}} />
         </TouchableOpacity>
         
         <TouchableOpacity style={{backgroundColor:'green',width:36,height:36,borderRadius:36/2,justifyContent:'center',position:"absolute",top:5,right:8}} >
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
