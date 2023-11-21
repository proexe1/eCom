import React, {Component, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {Images} from '../Helpers/Images';
import {hp, wp} from '../Helpers/Constant';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../Components/Button';
import {Colors} from '../Helpers/Colors';
import {GlobalStyle} from '../Helpers/GlobalStyle';

const ChooseCreditOrDebit = () => {
  const navigation = useNavigation();
  const route = useRoute();
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

      <View style={styles.creditCardBackGround}>
        <View style={GlobalStyle.directionRow}>
          <Image style={styles.smallRounds} source={Images.SmallRounds} />
          <Image
            style={{...styles.smallRounds, marginLeft: -5}}
            source={Images.SmallRounds}
          />
        </View>
        {/* <Text style={styles.cardNumber}>{route?.params?.cardNumber}</Text> */}
        <Text style={styles.cardNumber}>
          {!route?.params?.cardNumber
            ? '0000 0000 0000 0000'
            : route?.params?.cardNumber}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{}}>
            <Text style={styles.cardString}>CARD HOLDER</Text>
            {/* <Text style={styles.cardValueString}>
              {route?.params?.editData}
            </Text> */}
            <Text style={styles.cardValueString}>
              {!route?.params?.editData ? '00/00' : route?.params?.editData}
            </Text>
          </View>
          <View style={{marginLeft: 37}}>
            <Text style={styles.cardString}>CARD SAVE</Text>
            {/* <Text style={styles.cardValueString}>{route?.params?.exDate}</Text> */}
            <Text style={styles.cardValueString}>
              {!route?.params?.exDate ? '01010' : route?.params?.exDate}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.button}>
          <Button
            name={'Add Card'}
            onPress={() => navigation.navigate('AddCard')}
          />
        </View>
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
  creditCardBackGround: {
    width: 343,
    height: 190,
    borderRadius: 5,
    backgroundColor: Colors.CommonTextColor,
    alignSelf: 'center',
    paddingHorizontal: 21,
  },
  cardInfo: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  labelName: {
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 12,
  },
  textInput: {
    width: wp(91.46),
    borderRadius: 6,
    borderWidth: wp(0.24),
    borderColor: '#EBF0FF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.6),
  },
  cardNumber: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: Colors.WhiteColor,
    textAlign: 'center',
    paddingTop: 31,
  },
  cardString: {
    fontFamily: 'Poppins-Light',
    color: Colors.WhiteColor,
    marginTop: 19,
  },
  cardValueString: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.WhiteColor,
  },
  smallRounds: {
    width: 22,
    height: 22,
    marginTop: 24,
    tintColor: '#3393c4',
  },
  button: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    backgroundColor: Colors.textColor,
  },
});

export default ChooseCreditOrDebit;
