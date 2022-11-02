import React,{useEffect} from 'react'
import {
    SafeAreaView,Text,Image
  } from 'react-native';
  import Images from "../../Assets/images";

const Splash = (props) => {

  useEffect(() => {
    setTimeout(
        () => {
            props.navigation.navigate("Editor");
        },
        3000,
    );
});

  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor:'white'}}>
      <Image source={Images.SplashLogo} style={{alignContent:'center'}}/>
    </SafeAreaView>
  )
}

export default Splash;