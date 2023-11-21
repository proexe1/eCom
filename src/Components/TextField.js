import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Image} from 'react-native';
import {fontSize, hp, wp} from '../Helpers/Constant';
import {keyboardType} from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

const TextField = ({
  placeholder,
  value,
  onChangeText,
  source,
  keyboardType,
}) => {
  const [PasswordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={{height: hp(4), width: wp(4), resizeMode: 'contain'}}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.TextInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!PasswordVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', flexDirection: 'row'},
  TextInput: {
    flex: 1,
    fontSize: fontSize(14),
    // marginHorizontal: 10,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default TextField;
