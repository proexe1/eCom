import React, { useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Image} from 'react-native';
import { hp, wp } from '../Helpers/Constant';

const TextField = ({
  placeholder,
  value,
  onChangeText,
  source,
}) => {
  const [PasswordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Image source={source}  style={{height: hp(4), width: wp(4), resizeMode:'contain'}}/>
      <TextInput
        placeholder={placeholder}
        style={styles.TextInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!PasswordVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex:1, alignItems:'center', flexDirection:'row'},
  TextInput: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default TextField;
