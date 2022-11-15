import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import TopBar from '../../common/topbar';
import DragActions from './dragActions';
import Listscreen from './listscreen';

const Editor = props => {
  const back = () => {
    props.navigation.navigate('MainEditor');
  };

  const ToEditor = () => {
    props.navigation.navigate('MainEditor');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TopBar
        title={'actions'}
        actionfire={back}
        done={ToEditor}
        style={{height: 30}}
      />

      <View style={styles.columnView}>
        <View style={styles.column}>
          <Listscreen />
        </View>
        <View style={styles.column}>
          <DragActions />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, flexDirection: 'column'},
  columnView: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'space-between',
  },
  column: {
    borderWidth: 0.6,
    flex: 1,
    borderRadius: 5,
  },
});

export default Editor;
