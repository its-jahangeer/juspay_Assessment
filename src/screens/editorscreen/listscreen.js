import React from 'react';
import { SafeAreaView, Text, Image, FlatList, View, TouchableOpacity } from 'react-native';
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const Listscreen = (props) => {

  const renderList = ({ item }) => {

    return (
      <TouchableOpacity style={{ backgroundColor: '#65b2db', margin: 5 }} onPress={() => props.selectItem(item)}>
        <Text style={{ fontSize: 12, color: 'white', textAlign: 'center', padding: 10 }}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', borderBottomWidth: 0.8, flexDirection: 'row' }}>
        <Material name="approximately-equal" size={25} color="#5394fc" style={{ alignSelf: 'center' }} />
        <Text style={{ textTransform: 'uppercase', fontSize: 16, color: '#5394fc', fontWeight: '800' }}>Code</Text>
      </View>
      <FlatList
        horizontal={false}
        data={props.actions}
        renderItem={renderList}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

    </SafeAreaView>);
};

export default Listscreen;
