import React from 'react';
import { SafeAreaView, View } from 'react-native';
import TopBar from '../../common/topbar';
import DragActions from './dragActions';
import Listscreen from './listscreen';

const Editor = (props) => {

  
  const back = () => {
    props.navigation.navigate('MainEditor');
    // console.log('presseddddd');
  }

  const ToEditor = () => {
    props.navigation.navigate('MainEditor');
    // console.log('presseddddd');
  }


  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column' }}>
        <TopBar title={'actions'} actionfire={back} done={ToEditor} style = {{height: 30}}/>

      <View style={{ backgroundColor: 'white', flex: 1, flexDirection: 'row', padding: 3, justifyContent: 'space-between' }}>
        <View style={{ borderWidth: 0.6, flex: 1, borderRadius: 5 }}>
          <Listscreen />
        </View>
        <View style={{ borderWidth: 0.6, flex: 1, borderRadius: 5 }}>
          <DragActions />
        </View>
        {/* <FuncExample/> */}
      </View>
    </SafeAreaView>
  );
};

export default Editor;
