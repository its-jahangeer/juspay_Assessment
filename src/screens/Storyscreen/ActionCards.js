import React,{useState} from 'react';
import {SafeAreaView, Text, Image,FlatList,View, TouchableOpacity,StyleSheet} from 'react-native';

const Listscreen = () => {
     
    const [data, setData] = useState(dummyData);

    const dummyData = [
        {
          id: 1,
          name: "orange card",
          color: "orange",
        },
        {
          id: 2,
          name: "red card",
          color: "red",
        },
        {
          id: 3,
          name: "green card",
          color: "green",
        },
        {
          id: 4,
          name: "blue card",
          color: "blue",
        },
        {
          id: 5,
          name: "cyan card",
          color: "cyan",
        },
      ];

      const removeItem = (id) => {
        let arr = data.filter(function(item) {
          return item.id !== id
        })
        setData(arr);
      };

      

   const renderList = ({ item, index }) => {
       
        return (
                <TouchableOpacity
                  style={styles.cardContainer}
                  onPress={() => removeItem(item.id)}
                >
                  <View style={[styles.card, {backgroundColor: item.color}]}>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
        
    }
  return <>
    <FlatList
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.flatList}
     horizontal={true}
     data={dummyData}
     renderItem={renderList}
     keyExtractor={(item, index) => index.toString()}
                />
                
  </>;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: 120,
      backgroundColor: "#ecf0f1",
      padding: 8,
    },
    flatList: {
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    cardContainer: {
      height: 100,
    //   width: width * 0.5,
      marginRight: 8,
    },
    card: {
      height: 100,
    //   width: width * 0.5,
      borderRadius: 12,
      padding: 10,
    },
    text: { color: "white", fontWeight: 'bold' }
  });

export default Listscreen;