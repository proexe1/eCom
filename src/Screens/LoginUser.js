import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Images} from '../Helpers/Images';
import Icon from '../Components/Icon';
import TextField from '../Components/TextField';
import Button from '../Components/Button';
import auth from '@react-native-firebase/auth';
import {String} from '../Helpers/String';
import {fontSize, hp, wp} from '../Helpers/Constant';
import {Colors} from '../Helpers/Colors';
import {GlobalStyle} from '../Helpers/GlobalStyle';


const LoginUser = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [pwdValidError, setPwdValidError] = useState('');

  const handleSignUp = async () => {
    //First of All , Function get null response
    setEmailValidError('');
    setPwdValidError('');

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
      //below function used when user first time created Account
      const isUserCreate = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      alert('Your data is successfully passed!');
      // alert(isUserCreate);  // asked issue to Shubham bhai

    } catch (error) {
      console.log('This is an error...', error.message);
      Alert.alert(Constant.ErrorMsg);
      console.log(error.message);
    }
  };

  // const createUser = () => {
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       console.log('signed in!');
  //     })
  //     .catch(error => {
  //       Alert.alert(Constant.ErrorMsg);
  //       console.log(error.message);
  //     });
  // };

  return (
    <View style={GlobalStyle.container}>
      <Icon style={{marginTop: hp(14)}} />
      <Text style={styles.wlc}>{String.LoginUser.wlc}</Text>
      <Text style={styles.StoContinue}>{String.LoginUser.StoContinue}</Text>
      <View style={styles.LoginTextField}>
        <Image style={styles.TextFieldIcon} source={Images.User} />
        <TextField
          value={email}
          onChangeText={txt => setEmail(txt)}
          placeholder={'Your Email'}
        />
      </View>
      {emailValidError ? <Text>{emailValidError}</Text> : null}
      <View style={styles.LoginSecondTextField}>
        <Image style={styles.TextFieldIcon} source={Images.Password} />
        <TextField
          value={password}
          onChangeText={txt => setPassword(txt)}
          placeholder={'Password'}
        />
      </View>
      {pwdValidError ? <Text>{pwdValidError}</Text> : null}
      <Button
        name={'Sign in'}
        onPress={() => {
          navigation.navigate('TabNavigation');
          // createUser();
          handleSignUp();
        }}
      //  onPress={handleSignUp}
        disabled={emailValidError || pwdValidError}
      />
      <Text style={styles.OR}>{String.LoginUser.OR}</Text>
      <View style={styles.LoginWithGoogle}>
        <Image style={styles.Social_Icon} source={Images.Google} />
        <View style={styles.SocialBox}>
          <Text style={styles.lwG}>{String.LoginUser.lwG}</Text>
        </View>
      </View>
      <View style={styles.LoginWithFacebook}>
        <Image style={styles.Social_Icon} source={Images.Facebook} />
        <View style={styles.SocialBox}>
          <Text style={styles.lwFB}>{String.LoginUser.lwFB}</Text>
        </View>
      </View>
      <Text style={styles.FP}>{String.LoginUser.FP}</Text>
      <View style={{flexDirection: 'row', marginTop: hp(1)}}>
        <Text style={styles.DontQuestion}>{String.LoginUser.DontQuestion}</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('RegisterUser')}>
          <Text style={styles.SignUp}>{String.LoginUser.SignUp}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginUser;

const styles = StyleSheet.create({
  wlc: {
    fontSize: hp(1.9),
    fontWeight: '700',
    marginTop: hp(2),
    textAlign: 'center',
  },
  StoContinue: {
    marginTop: hp(1.5),
    fontSize: hp(1.4),
    textAlign: 'center',
    color: 'gray',
  },
  LoginTextField: {
    width: wp(91.46),
    marginTop: 28,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: wp(0.5),
    borderRadius: 5,
    borderColor: '#EBF0FF',
  },
  LoginSecondTextField: {
    width: wp(91.46),
    marginTop: hp(1.2),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: wp(0.53),
    borderRadius: 5,
    borderColor: '#EBF0FF',
  },
  OR: {
    fontWeight: '700',
    color: '#40BFFF',
    fontSize: hp(1.7),
    paddingLeft: wp(1.33),
    marginTop: hp(2.5),
  },
  SocialBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  Social_Icon: {
    width: wp(8),
    height: wp(8),
    marginLeft: wp(4.2),
    alignSelf: 'center',
  },
  Social_Icon: {
    width: wp(8),
    height: wp(8),
    marginLeft: wp(4.2),
    alignSelf: 'center',
  },
  lwG: {
    width: wp(73.86),
    marginLeft: wp(4.2),
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.textColor,
    fontWeight: '700',
    fontSize: hp(1.7),
  },
  LoginWithGoogle: {
    flexDirection: 'row',
    width: wp(91.46),
    height: hp(7),
    borderWidth: 2,
    marginTop: hp(3.32),
    borderRadius: 5,
    borderColor: '#EBF0FF',
  },
  LoginWithFacebook: {
    flexDirection: 'row',
    width: wp(91.46),
    height: hp(7),
    borderWidth: 2,
    marginTop: hp(1.2),
    borderRadius: 5,
    borderColor: '#EBF0FF',
  },
  lwFB: {
    alignSelf: 'center',
    color: '#9098B1',
    fontWeight: '700',
    fontSize: hp(1.7),
  },
  FP: {
    fontWeight: '700',
    color: '#40BFFF',
    fontSize: hp(1.4),
    marginTop: hp(1.9),
  },
  DontQuestion: {
    fontWeight: '500',
    color: '#9098B1',
    fontSize: hp(1.4),
  },
  SignUp: {
    fontWeight: '700',
    color: '#40BFFF',
    fontSize: fontSize(12),
    paddingLeft: wp(1.5),
  },
  TextFieldIcon: GlobalStyle.TextFieldIcon,
});
