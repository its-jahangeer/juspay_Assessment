import React,{useState,useContext} from 'react';
import {SafeAreaView, Text, Image,FlatList,View,TouchableOpacity, Button,StyleSheet} from 'react-native';
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import ActionContext from '../../store/action-context';

const Listscreen = (props) => {

  const context = useContext(ActionContext);

  const renderList = ({ item }) => {

    return (
      <TouchableOpacity style={styles.ButtonView} onPress = {() => context.updateSelectedActionList(item)}>
        <Text style={styles.textStyle}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView>
      <View style={styles.View1}>
        <Material name="approximately-equal" size={25} color="#5394fc" style={{ alignSelf: 'center' }} />
        <Text style={styles.codeText}>Code</Text>
      </View>
      <FlatList
        horizontal={false}
        data={context.defaultActionList}
        renderItem={renderList}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

    </SafeAreaView>);
};
const styles = StyleSheet.create({
  ButtonView:{ backgroundColor: '#65b2db', margin: 5 },
  textStyle:{ fontSize: 12, color: 'white', textAlign: 'center', padding: 10 },
  View1:{ justifyContent: 'center', borderBottomWidth: 0.8, flexDirection: 'row' },
  codeText:{ textTransform: 'uppercase', fontSize: 16, color: '#5394fc', fontWeight: '800' },
});

export default Listscreen;
