import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../../Assets/images';

const Listscreen = () => {
  var [data, setData] = useState(dummyData);

  const dummyData = [
    {
      id: 1,
      name: 'Action 1',
      color: 'white',
      actions: 'add actions',
    },
    {
      id: '2',
      name: 'Action 2',
      color: 'white',
      actions: 'add actions',
    },
    {
      id: 3,
      name: '',
      color: 'white',
      actions: 'add actions',
    },
    {
      id: 4,
      name: '',
      color: 'white',
      actions: 'add actions',
    },
    {
      id: 5,
      name: '',
      color: 'white',
      actions: 'add actions',
    },
  ];

  useEffect(()=>{
  var lastIndex = dummyData.length;
  console.log(lastIndex);
  },[]);
  

  const removeItem = id => {
    let arr = data.filter(function (item) {
      return item.id !== id;
    });
    setData(arr);
    LayoutAnimation.configureNext(layoutAnimConfig);
  };

  const layoutAnimConfig = {
    duration: 100,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  useState(() => {
    setData(dummyData);
  }, []);

  const renderList = ({item, index}) => {
    return (
      <>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={[styles.card, {backgroundColor: item.color}]}>
            <Text style={styles.text}>{item.name}</Text>
            <Image
              source={Images.Cat}
              style={{height: 50, width: 40, alignSelf: 'center',position:'relative'}}
            />
            <Text
              style={{
                backgroundColor: '#5394fc',
                color: '#fff',
                textAlign: 'center',
              }}>
              Add Actions
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => removeItem(item.id)}
          style={{
            backgroundColor: '#5394fc',
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            position: 'absolute',
            top: -5,
            right: 1,
          }}>
          <Material
            name="delete"
            size={16}
            color="#fff"
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
     {dummyData.id == 1 ?
      <View>
       <Text>Plus</Text>
      </View>:<FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={true}
        data={data}
        renderItem={renderList}
        keyExtractor={(item, index) => item.id.toString()}
      />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 120,
    backgroundColor: '#ecf0f1',
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
    elevation:1,
    shadowOpacity:1,
    borderRadius: 2,
  },
  card: {
    height: 100,
    //   width: width * 0.5,
    borderRadius: 12,
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'green',
    textAlign: 'center',
    top: '30%',
    left: '30%',
    width:'100%',
    position:'absolute',
  },
});

export default Listscreen;
