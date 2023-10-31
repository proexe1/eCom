// signInWithEmailAndPassword;
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from '../Components/Icon';
import TextField from '../Components/TextField';
import Button from '../Components/Button';
import auth from '@react-native-firebase/auth';
import {String} from '../Helpers/String';
import {GlobalStyle} from '../Helpers/GlobalStyle';
import {Images} from '../Helpers/Images';
import {RFValue} from 'react-native-responsive-fontsize';
import firestore from '@react-native-firebase/firestore';


export const fontSize = val => RFValue(val, 812);
export const wp = val => widthPercentageToDP(val);
export const hp = val => heightPercentageToDP(val);

const RegisterUser = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullNameValidError, setFullNameValidError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [pwdValidError, setPwdValidError] = useState('');

  const handleSignUp = async () => {
    //First of All , Function get null response
    setFullNameValidError('');
    setEmailValidError('');
    setPwdValidError('');

    // Validate full name
    if (!fullName) {
      setFullNameValidError('Full Name must be entered');
      return;
    }

    // Validate email
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) {
      setEmailValidError('Email must be entered');
      return;
    } else if (!emailRegex.test(email)) {
      setEmailValidError('Enter a valid email address');
      return;
    }

    // Validate password
    let passwordRegex =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
    if (!password) {
      setPwdValidError('Password must be entered');
      return;
    } else if (!passwordRegex.test(password)) {
      setPwdValidError('Enter a valid password');
      return;
    }

    try {
      const isUserCreate = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      await firestore().collection('Users').doc(isUserCreate.user.uid).set({
        UserName: fullName,
        Email: email,
        Password: password,
      });
      navigation.navigate('LoginUser');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.icon}>
        <Icon />
      </View>
      <Text style={GlobalStyle.started}>{String.RegisterUser.started}</Text>
      <Text style={GlobalStyle.newAc}>{String.RegisterUser.newAc}</Text>
      {/* ***************<Text>below code : start TextField related Logic </Text>************* */}
      <View style={{marginTop: 28}}>
        <View style={styles.FieldView}>
          <Image style={styles.TextFieldIcon} source={Images.User} />
          <TextField
            placeholder={'Full Name'}
            onChangeText={txt => setFullName(txt)}
            style={
              fullNameValidError ? {borderColor: 'blue', borderWidth: 2} : {}
            }
            onFocus={() => setFullNameValidError('')}
          />
        </View>
        {fullNameValidError ? <Text>{fullNameValidError}</Text> : null}
        <View style={styles.FieldSecondView}>
          <Image style={styles.TextFieldIcon} source={Images.Message} />
          <TextField
            placeholder={'Your Email'}
            value={email}
            onChangeText={txt => {
              setEmail(txt);
              setEmailValidError('');
            }}
            style={emailValidError ? {borderColor: 'blue', borderWidth: 2} : {}} // it's not workable
            onFocus={() => setEmailValidError('')}
          />
        </View>
        {emailValidError ? <Text>{emailValidError}</Text> : null}
        <View style={styles.FieldSecondView}>
          <Image style={styles.TextFieldIcon} source={Images.Password} />
          <TextField
            placeholder={'Password'}
            secureTextEntry={true}
            value={password}
            onChangeText={txt => {
              setPassword(txt);
              setPwdValidError('');
            }}
            style={pwdValidError ? {borderColor: 'blue', borderWidth: 2} : {}} // // it's not workable
            onFocus={() => setPwdValidError('')}
          />
        </View>
        {pwdValidError ? <Text>{pwdValidError}</Text> : null}
        <Button
          name={'Sign Up'}
          onPress={handleSignUp}
          disabled={fullNameValidError || emailValidError || pwdValidError}
        />
      </View>
      {/* ***************<Text>below code : Over TextField related Logic </Text>************* */}
      <View style={styles.TextFieldArea}>
        <Text style={GlobalStyle.haveAC}>{String.RegisterUser.haveAC}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginUser')}>
          <Text style={GlobalStyle.SignIn}>{String.RegisterUser.SignIn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RegisterUser;

const styles = StyleSheet.create({
  FieldView: {
    width: wp(91.46),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#EBF0FF',
  },
  FieldSecondView: {
    width: wp(91.46),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    marginTop: 10,
  },
  TextFieldIcon: GlobalStyle.TextFieldIcon,
  TextFieldArea: {flexDirection: 'row', marginTop: 24}
});
