import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MainEditor from './mainEditor';
const Axis = (props) => {
  
  let axisX = parseFloat(props.xdata).toFixed(1);
  let axisY = parseFloat(props.ydata).toFixed(1);

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.mainHeading}>Sprit</Text>
      <Text style={styles.Heading}>Cat</Text>
      <Text style={styles.coordinates}>X</Text>
      <Text style={styles.Heading}>{axisX}</Text>
      <Text style={styles.coordinates}>Y</Text>
      <Text style={styles.Heading}>{axisY}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: '10%',
    margin: 7,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainImage: {
    alignContent: 'center',
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  Heading: {
    borderWidth: 1,
    padding: 1,
    borderRadius: 8,
    paddingHorizontal: 9,
  },
  coordinates: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
});

export default Axis;
