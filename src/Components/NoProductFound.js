import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images} from '../Helpers/Images';
import Button from './Button';
import {fontSize, wp} from '../Helpers/Constant';

const NoProductFound = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={Images.No_Found} />
      <Text style={{fontSize: fontSize(22), fontFamily: 'Poppins-Bold'}}>
        Product Not Found
      </Text>
      <Text
        style={{
          color: '#9098B1',
          fontFamily: 'Poppins-Regular',
          marginTop: wp(1),
        }}>
        Thank you for shopping using lafyuu
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoProductFound;
