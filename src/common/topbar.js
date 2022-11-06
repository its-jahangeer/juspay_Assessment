import React from 'react';
import { ImageBackground, TouchableOpacity,Text, View, StyleSheet, Image } from 'react-native';
import { color, wp, hp, isANDROID, } from './themeHelper';
import Images from '../Assets/images';

const TopBar = (props,) => {
    return (
       <View style={{backgroundColor:'#5394fc',flexDirection:'row',justifyContent:'space-around',height:40,alignItems:'center'}}>
        <Image source={Images.TopbarLogo} style={{height:28,width:80}}/>
        <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>Sign In</Text>
       </View>
    );
}
export default TopBar;

const styles = StyleSheet.create({
    topBarStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: wp(4) 
    },
    topBarStyleAndroid: { marginTop: wp(7), },
    topBarStyleIOS: { marginTop: wp(14), },

    lineStyle: {
        borderBottomWidth: 0.5,
        borderColor: color.Themecolor,
        marginHorizontal: hp(3)
    },
    titleView: {
        alignContent: 'center',
    },
    titleViewAndroid: { flex: 7 },
    titleViewIOS: { flex: 8 },

    iconPosition:{
        alignSelf: 'center'
    },

    titleText: {
        fontWeight: '400',
        fontSize: 20,
        alignSelf: 'center',
        marginTop:wp(2),
        color:color.white
    },
    titleTextAndroid:{ marginRight: hp(1) },
    titleTextIOS:{ marginRight: hp(6) },

    iconView: {
        flex: 1.5, justifyContent: "center",
    },

    filterIcon: { 
        flex: 1,
        marginRight:wp(5) 
    },
});