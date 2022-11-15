import React, {useEffect} from 'react';
import {SafeAreaView, Text, Image, StyleSheet} from 'react-native';
import Images from '../../Assets/images';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Editor');
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.MainContainer}>
      <Image source={Images.SplashLogo} style={styles.mainImage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  mainImage:{
    alignContent: 'center'
  }
});

export default Splash;
