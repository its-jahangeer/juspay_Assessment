import React,{useState} from 'react';
import {SafeAreaView, Text, Image,FlatList,View, TouchableOpacity,StyleSheet, LayoutAnimation} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';


const Listscreen = () => {
     
    var [data, setData] = useState(dummyData);

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

      // var lastIndex = dummyData.lastIndexOf();
      // console.log(lastIndex);

      const removeItem = (id) => {
        let arr = data.filter(function(item) {
          return item.id !== id;
        })
        setData(arr);
        LayoutAnimation.configureNext(layoutAnimConfig);
      };

      const layoutAnimConfig = {
        duration : 300,
        update : {
          type:LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.opacity,
        },
      };
 
      useState(()=>{
        setData(dummyData);
      },[]);
      

   const renderList = ({ item, index }) => {
       
        return (
           <>
                <TouchableOpacity
                  style={styles.cardContainer}
                >
                  <View style={[styles.card, {backgroundColor: item.color}]}>
                    <Text style={styles.text}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeItem(item.id)} style={{backgroundColor:'#5394fc',width:25,height:25,borderRadius:25/2,justifyContent:'center',position:"absolute",top:-5,right:1}}>
                <Material name="delete" size={16} color="#fff" style={{alignSelf:'center'}} />
              </TouchableOpacity>
              </>
              );
        
    }
  return <>
    <FlatList
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={styles.flatList}
     horizontal={true}
     data={data}
     renderItem={renderList}
     keyExtractor={(item, index) => item.id.toString()}
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
      width: 120,
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
