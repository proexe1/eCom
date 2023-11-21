import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {hp, wp} from '../Helpers/Constant';
import {Image} from 'react-native';
import {Images} from '../Helpers/Images';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from '../Helpers/Colors';
import TextField from '../Components/TextField';
import Button from '../Components/Button';

const UpdateCard = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [editData, setEditData] = useState('' || route?.params?.holderName);
  const [exDate, setExDate] = useState('' || route?.params?.exDate);
  const [secCode, setSecCode] = useState('' || route?.params?.securityCode);
  const [cardNumber, setCardNumber] = useState('' || route?.params?.cardNumber);

  // $('#credit-card').on('keypress change', function () {
  //   $(this).val(function (index, value) {
  //     return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
  //   });
  // });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ProfileHeaderView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.LeftIcon} source={Images.Left} />
        </TouchableOpacity>
        <Text style={styles.HeaderString}>[Person name] Card</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreditCard');
          }}></TouchableOpacity>
      </View>
      <View style={styles.SingleLine} />
      <View style={styles.creditCardBackGround}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.smallRounds} source={Images.SmallRounds} />
          <Image
            style={{...styles.smallRounds, marginLeft: -5}}
            source={Images.SmallRounds}
          />
        </View>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{}}>
            <Text style={styles.cardString}>CARD HOLDER</Text>
            <Text style={styles.cardValueString}>{editData}</Text>
            {/* <Text style={styles.cardValueString}>
              {route?.params?.holderName}
            </Text> */}
          </View>
          <View style={{marginLeft: 37}}>
            <Text style={styles.cardString}>CARD SAVE</Text>
            <Text style={styles.cardValueString}>{exDate}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.labelName}>Card Number</Text>
        <View style={styles.textInput}>
          <TextField
            placeholder={'Enter Card Number'}
            // value={route?.params?.holderName}
            value={editData}
            onChangeText={text => setEditData(text)}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{...styles.labelName, marginTop: 24}}>
              Expiration Date
            </Text>
            <View style={{...styles.textInput, width: 165}}>
              <TextField
                placeholder={'Enter Card Number'}
                value={exDate}
                onChangeText={text => setExDate(text)}
              />
            </View>
          </View>
          <View style={{marginLeft: 13, marginBottom: 24}}>
            <Text style={{...styles.labelName, marginTop: 24}}>
              Security Code
            </Text>
            <View style={{...styles.textInput, width: 165}}>
              <TextField
                placeholder={'Enter Security Code'}
                value={secCode}
                onChangeText={text => setSecCode(text)}
              />
            </View>
          </View>
        </View>
        <Text style={styles.labelName}>Card Number</Text>
        <View style={styles.textInput}>
          <TextField
            id="credit-card"
            placeholder={'Enter Card Number'}
            value={cardNumber}
            onChangeText={text => setCardNumber(text)}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 16,
        }}>
        <Button
          name={'Save'}
          onPress={() => {
            navigation.navigate('CreditOrDebit', {
              editData,
              exDate,
              cardNumber,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteColor,
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
});

//make this component available to the app
export default UpdateCard;
