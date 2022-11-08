import React from 'react';
import { SafeAreaView, Text, Image, View, StyleSheet } from 'react-native';
import Images from '../../Assets/images';
import TopBar from '../../common/topbar';
import DragActions from './dragActions';
import Listscreen from './listscreen';
import FuncExample from './trail';
import actionList from '../../Assets/actionList';
import { useState } from 'react/cjs/react.development';

const Editor = (props) => {

  const [selectedActions, setSelectedAction] = useState([]);


  const back = () => {
    props.navigation.navigate('MainEditor');
    // console.log('presseddddd');
  }

  const ToEditor = () => {
    props.navigation.navigate('MainEditor');
    // console.log('presseddddd');
  }

  const updateSelectedActionList = (item) => {
    // console.log(item);
    setSelectedAction((prevState) => prevState.concat([item]))
  }

  const deleteItem = (itemIndex) => {
    console.log(itemIndex);
    setSelectedAction((prevState) => prevState.filter((item,index) => index !== itemIndex));

  }


  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column' }}>
        <TopBar title={'actions'} actionfire={back} done={ToEditor} style = {{height: 30}}/>

      <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row', padding: 3, justifyContent: 'space-between' }}>
        <View style={{ borderWidth: 0.6, flex: 1, borderRadius: 5 }}>
          <Listscreen actions={actionList} selectItem={updateSelectedActionList} />
        </View>
        <View style={{ borderWidth: 0.6, flex: 1, borderRadius: 5 }}>
          <DragActions selectedActions={selectedActions} deleteItem={deleteItem} />
        </View>
        {/* <FuncExample/> */}
      </View>
    </SafeAreaView>
  );
};

export default Editor;
