import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {color, wp, hp, isANDROID,isIOS} from './themeHelper';
import Images from '../Assets/images';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const TopBar = props => {
  return (
    <>
      {props.title === 'actions' ? (
        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={props.actionfire}>
            <Material name="arrow-left-thin" size={30} color={'#fff'} />
          </TouchableOpacity>
          <Image source={Images.TopbarLogo} style={styles.scratchLogo} />
          <TouchableOpacity onPress={props.done}>
            <Text style={styles.DoneButton}>Done</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.signInView}>
          <Image source={Images.TopbarLogo} style={styles.scratchLogo2} />
          <Text style={styles.signIn}>Sign In</Text>
        </View>
      )}
    </>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#5394fc',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
    top:isIOS?30:0,
  },
  scratchLogo: {height: 28, width: 80, left: 20},
  DoneButton: {color: 'white', fontSize: 16, fontWeight: '600', left: 180},
  signInView: {
    backgroundColor: '#5394fc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 40,
    alignItems: 'center',
  },
  scratchLogo2: {height: 28, width: 80},
  signIn: {color: 'white', fontSize: 16, fontWeight: '600'},
});
