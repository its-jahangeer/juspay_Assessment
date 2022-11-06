import React, {useState} from 'react';
import {Dimensions, PixelRatio, Platform} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const isIOS = Platform.OS === 'ios';
const isANDROID = Platform.OS === 'android';
const isiPAD = screenHeight / screenWidth < 1.6;

const widthPercentageToDP = wp => {
  const widthPercent = wp;
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = hp => {
  const heightPercent = hp;
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// based on iphone 5s's scale
const scale = screenWidth / 375;
const normalize = size => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const color = {
  Themecolor: '#054AA9',
  Themecolor2: '#054AA9aa',
  ThemecolorLight: '#D6E8FA',
  ThemecolorLight1: '#054189',
  lightYellow: '#FFE145',
  orange: '#D48601',
  white: '#FFFFFF',
  silver: '#C7C7C7',
  lightgray: '#C7C7C7aa',
  brown: '#2A0500',
  black: '#000000',
  golden: '#D79014',
  gray: '#CCC3C2',
  lightblack: '#1E1E1E',
  lightblue: '#45C0FF',
  red: '#FF4C34',
  greydropdown: '#E9ECEF',
  greylight: 'lightgrey',
  greydark: 'darkgrey',
  filterColor: '#F6F6F6',
  green: '#219618',
  orange: '#FB9901',
  blue: '#3366CC',
};

//const Splash_Gradient = ['#CC262E', '#660E14'];

const fonts = {
  font_bold: 'bold',
};

const Loader = props => {
  return (
    <ActivityIndicator
      animating={props.visible}
      size={'large'}
      color={'#054AA9'}
    />
  );
};

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  screenHeight,
  screenWidth,
  normalize,
  isIOS,
  isANDROID,
  isiPAD,
  color,
  fonts,
  Loader,
};