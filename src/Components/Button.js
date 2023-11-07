import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../Helpers/Constant';

const Button = ({name, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.Btn, styles.elevation]} onPress={onPress}>
        <Text style={styles.Btn_text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  Btn: {
    backgroundColor: '#40BFFF',
    width: wp(91.46),
    height: hp(7),
    borderRadius: 5,
    marginTop: hp(1.9),
    justifyContent: 'center',
  },
  Btn_text: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    fontSize: hp(1.7),
  },
  elevation: {
    shadowColor: '#40BFFF',
    shadowOpacity: 0.3,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
});

export default Button;
