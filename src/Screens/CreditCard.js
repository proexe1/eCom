import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {Images} from '../Helpers/Images';
import {hp, wp} from '../Helpers/Constant';
import {useNavigation} from '@react-navigation/native';
import Button from '../Components/Button';

const CreditCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView bounce={false} style={styles.container}>
      <View style={styles.ProfileHeaderView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.LeftIcon} source={Images.Left} />
        </TouchableOpacity>
        <Text style={styles.HeaderString}>Choose Card</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreditCard');
          }}>
          <Image
            style={{...styles.LeftIcon, marginLeft: 171}}
            source={Images.Plus}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.SingleLine} />
      <View style={{alignItems: 'center'}}>
        {/* <Image style={{width: 343, height: 190}} source={Images.creditCard} /> */}
        <ImageBackground
          style={{width: 343, height: 190}}
          source={Images.creditCard}>
          <View style={{flexDirection: 'row', marginTop: 24, marginLeft: 24}}>
            <Image
              style={{width: 22, height: 22, tintColor: '#3393c4'}}
              source={Images.SmallRounds}
            />
            <Image
              style={{
                width: 22,
                height: 22,
                tintColor: '#3393c4',
                marginLeft: -7,
              }}
              source={Images.SmallRounds}
            />
          </View>
          <Text>{'1234 5678 9072'}</Text>
        </ImageBackground>
        <Button name={'Pay $'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ProfileHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftIcon: {width: 24, height: 24, marginLeft: 16, marginRight: 12},
  HeaderString: {fontSize: 16, fontFamily: 'Poppins-SemiBold'},
  SingleLine: {
    height: hp(0.2),
    backgroundColor: '#EBF0FF',
    marginVertical: wp(4.2),
    width: hp(100),
  },
});

export default CreditCard;
