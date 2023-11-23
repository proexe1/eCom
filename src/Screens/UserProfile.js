import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Images} from '../Helpers/Images';
import {hp, wp} from '../Helpers/Constant';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';
import firestore, {firebase} from '@react-native-firebase/firestore';

const UserProfile = ({navigation}) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(auth()?.currentUser?.uid)
      .onSnapshot(querySnapshot => {
        setUserData(querySnapshot.data());
      });

    return () => subscriber();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ProfileHeaderView}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{width: 20, height: 20, marginRight: 5, tintColor: 'gray'}}
            source={Images.NavBar}
          />
        </TouchableOpacity>
        <Text style={styles.ProfileString}>Profile</Text>
      </View>
      <View style={styles.SingleLine} />
      <Image style={styles.UserIconImage} source={Images.user} />
      <Text style={{fontWeight: '700', marginTop: hp(10), marginLeft: 10}}>
        Email: {userData?.Email}
      </Text>
      <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
          navigation.dispatch(StackActions.replace('LoginUser'));
        }}
        style={styles.LogOutButton}>
        <Text style={styles.LogOutString}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  SingleLine: {
    height: hp(0.2),
    backgroundColor: '#EBF0FF',
    marginVertical: wp(4.2),
  },
  ProfileHeaderView: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  LeftIcon: {
    width: 24,
    height: 24,
  },
  ProfileString: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 10,
  },
  UserIconImage: {
    width: 72,
    height: 72,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#EBF0FF',
    alignSelf: 'center',
    tintColor: '#40BFFF',
  },
  LogOutButton: {
    width: 107,
    height: 57,
    backgroundColor: '#40BFFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 10,
  },
  LogOutString: {
    color: 'white',
    fontWeight: '900',
    fontSize: 15,
  },
});

export default UserProfile;
