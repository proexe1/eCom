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

const PaymentMethod = ({navigation}) => {
  const data = [
    {id: '1', url: Images.CD_Cart, name: 'Credit Card Or Debit'},
    {id: '2', url: Images.PayPal, name: 'PayPal'},
    {id: '3', url: Images.Bank, name: 'Bank Transfer'},
  ];

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

      {data.map(item => (
        <TouchableOpacity
          key={item.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 28,
            paddingVertical: 19,
            paddingHorizontal: 16,
          }}>
          <Image style={{width: 24, height: 24}} source={item.url} />
          <Text style={{marginLeft: 16, fontFamily: 'Poppins-SemiBold'}}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ProfileHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftIcon: {width: 24, height: 24, marginLeft: 16, marginRight: 12},
  ProfileString: {fontSize: 16, fontFamily: 'Poppins-Regular'},
});

export default PaymentMethod;
