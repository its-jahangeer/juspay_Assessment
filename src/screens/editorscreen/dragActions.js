import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList,StyleSheet } from 'react-native';
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
      <TouchableOpacity style={styles.buttonList} onPress={() => {context.deleteItem(index)}} >
        <Text style={styles.flatListText}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  console.log(context.selectedActionList);
  return (
    <>
      <View style={styles.MainView}>
        <Material name="flag-variant" size={25} color="green" style={{ alignSelf: 'center' }} />
        <Text style={styles.ActionHeading}>Action</Text>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity onPress={HandleClick} style={{ backgroundColor: isActive ? 'green' : 'grey', flex: 1 }}>
          <Text style={styles.action1Text}>Action1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={HandleClick2} style={{ backgroundColor: isActive ? 'grey' : 'green', flex: 1 }}>
          <Text style={styles.action2Text}>Action2</Text>
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

const styles = StyleSheet.create({
  buttonList:
    { backgroundColor: '#65b2db', margin: 5 },
    flatListText:{ fontSize: 12, color: 'white', textAlign: 'center', padding: 10 },
    MainView:{ justifyContent: 'center', borderBottomWidth: 0.8, flexDirection: 'row' },
    ActionHeading:{ textTransform: 'uppercase', fontSize: 16, color: 'green', fontWeight: '800' },
    view2:{ flexDirection: 'row', justifyContent: 'space-around' },
    // action1Button:{ backgroundColor: isActive ? 'green' : 'grey', flex: 1 },
    action1Text:{ color: "white", fontSize: 16, textAlign: 'center' },
    // action2Button:{ backgroundColor: isActive ? 'grey' : 'green', flex: 1 },
    action2Text:{ color: "white", fontSize: 16, textAlign: 'center' }
    



});

export default DragActions;
