import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
 
import FlatList from "react-native-drag-flatlist";
 
const colors = ["#d3f261", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
 
const originalData = new Array(100).fill(0).map((item, index) => ({
  text: index,
  // color: colors[index % colors.length]
}));
 
const FuncExample = () => {
  const [data, setData] = useState(originalData);
 
  const keyExtractor = item => item.text.toString();
 
  const renderItem = ({ item, drag }) => (
    <TouchableOpacity
      style={[styles.item,]}
      onLongPress={drag}
    >
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
 
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      onMoveEnd={setData}
    />
  );
};
 
const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    // width: 100,
    height: 100,
    flex:1,
  }
});
 
export default FuncExample;