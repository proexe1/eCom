import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {Images} from '../Helpers/Images';
import {wp} from '../Helpers/Constant';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const PaymentMethod = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ProfileHeaderView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.LeftIcon} source={Images.Left} />
        </TouchableOpacity>
        <Text style={styles.ProfileString}>Payment</Text>
      </View>

      <TouchableOpacity
        style={styles.PaymentMethodOption}
        onPress={() => {
          navigation.navigate('CreditOrDebit');
        }}>
        <Image style={{width: 24, height: 24}} source={Images.CD_Cart} />
        <Text style={styles.PaymentMethodString}>Credit Card Or Debit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PaymentMethodOption}>
        <Image style={{width: 24, height: 24}} source={Images.PayPal} />
        <Text style={styles.PaymentMethodString}>PayPal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PaymentMethodOption}>
        <Image style={{width: 24, height: 24}} source={Images.Bank} />
        <Text style={styles.PaymentMethodString}>Bank Transfer</Text>
      </TouchableOpacity>
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
  ProfileString: {fontSize: 16, fontFamily: 'Poppins-Regular'},
  PaymentMethodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    paddingVertical: 19,
    paddingHorizontal: 16,
  },
  PaymentMethodString: {marginLeft: 16, fontFamily: 'Poppins-SemiBold'},
});

export default PaymentMethod;
