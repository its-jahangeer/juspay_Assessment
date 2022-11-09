import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { useContext } from 'react/cjs/react.development';
import ActionContext from '../../store/action-context';

const DragActions = (props) => {
  const context = useContext(ActionContext)
  const [isActive, setActive] = useState(false);

  const HandleClick = () => {
    setActive(true);
  }
  const HandleClick2 = () => {
    setActive(false);
  }

  const renderItem = ({ item,index }) => {

    return (
      <TouchableOpacity style={{ backgroundColor: '#65b2db', margin: 5 }} onPress={() => {context.deleteItem(index)}} >
        <Text style={{ fontSize: 12, color: 'white', textAlign: 'center', padding: 10 }}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <>
      <View style={{ justifyContent: 'center', borderBottomWidth: 0.8, flexDirection: 'row' }}>
        <Material name="flag-variant" size={25} color="green" style={{ alignSelf: 'center' }} />
        <Text style={{ textTransform: 'uppercase', fontSize: 16, color: 'green', fontWeight: '800' }}>Action</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={HandleClick} style={{ backgroundColor: isActive ? 'green' : 'grey', flex: 1 }}>
          <Text style={{ color: "white", fontSize: 16, textAlign: 'center' }}>Action1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={HandleClick2} style={{ backgroundColor: isActive ? 'grey' : 'green', flex: 1 }}>
          <Text style={{ color: "white", fontSize: 16, textAlign: 'center' }}>Action2</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={false}
        data={context.selectedActionList}
        renderItem={renderItem}
        keyExtractor={(item,index) => item.id+index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default DragActions;
