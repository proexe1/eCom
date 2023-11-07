//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images} from '../Helpers/Images';
import Button from './Button';

// create a component
const NoProductFound = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Images.No_Found} />
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Product Not Found</Text>
      <Text style={{color: '#9098B1'}}>
        Thank you for shopping using lafyuu
      </Text>
      {/* <Button name={'Back to Home'} /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default NoProductFound;
