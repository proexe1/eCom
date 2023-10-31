import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {wp} from '../Helpers/Constant';
import {Images} from '../Helpers/Images';

const Icon = props => {
  return (
    <View style={styles.container}>
      <View style={props.style}>
        <Image source={Images.BlueIcon} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: wp(19.2),
    height: wp(19.2),
    borderRadius: 20,
  },
});

export default Icon;
