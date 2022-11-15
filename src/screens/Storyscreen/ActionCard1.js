import React from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import Material from 'react-native-vector-icons/MaterialCommunityIcons';
  import Images from '../../Assets/images';

const Listscreen2 = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'center'}}>
       {/*
        <TouchableOpacity
          onPress={()=>console.log('clicked!!')}
          style={{
            backgroundColor: '#5394fc',
            width: 25,
            height: 25,
            borderRadius: 25 / 2,
            justifyContent: 'center',
            position: 'absolute',
            left: 100,
          }}>
          <Material
            name="delete"
            size={16}
            color="#fff"
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>  */}
        <TouchableOpacity  style={styles.cardContainer}>
            <Text style={styles.text}>Action 1</Text>
            <Image
              source={Images.Cat}
              style={{height: 50, width: 40,}}
            />
            <Text
              style={{
                backgroundColor: '#5394fc',
                color: '#fff',
                textAlign: 'center',
              }}>
              Add Actions
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
        <Material
            name="plus"
            size={20}
            color="#000"
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    
    cardContainer: {
      height: 100,
      width: 120,
      elevation:1,
      shadowOpacity:1,
      borderRadius: 12,
      marginVertical:14,

    },
    card: {
    //   height: 100,
    //   borderRadius: 12,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'green',
      textAlign: 'center',
      top: '30%',
    //   left: '30%',
      width:'100%',
      position:'absolute',
    },
  });

export default Listscreen2;