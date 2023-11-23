import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {hp, wp} from '../Helpers/Constant';
import {Images} from '../Helpers/Images';
import {useNavigation} from '@react-navigation/native';
import TextField from '../Components/TextField';
import Button from '../Components/Button';

const AddCard = () => {
  const navigation = useNavigation();
  const [holderName, setHolderName] = useState('');
  const [exDate, setExDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const [holderNameValidError, setHolderNameValidError] = useState('');
  const [exDateValidError, setExDateValidError] = useState('');
  const [securityCodeValidError, setSecurityCodeValidError] = useState('');
  const [cardNumberValidError, setCardNumberValidError] = useState('');

  const handleAddCard = async () => {
    if (!holderName) {
      setHolderNameValidError('Please Enter Card Holder Name');
    } else if (!exDate) {
      setExDateValidError('Please Enter Expiration date');
    } else if (!securityCode) {
      setSecurityCodeValidError('Please Enter Security code');
    } else if (!cardNumber) {
      setCardNumberValidError('Please Enter Card Number');
    } else {
      // Validation passed, navigate to 'UpdateCard' screen
      navigation.navigate('UpdateCard', {
        holderName,
        exDate,
        securityCode,
        cardNumber,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ProfileHeaderView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.LeftIcon} source={Images.Left} />
        </TouchableOpacity>
        <Text style={styles.HeaderString}>Add Card</Text>
      </View>
      <View style={styles.SingleLine} />
      <View style={styles.cardInfo}>
        <Text style={styles.labelName}>Card Holder</Text>
        <View
          style={{
            ...styles.textInput,
            borderColor:
              holderNameValidError && !holderName ? 'red' : '#EBF0FF',
          }}>
          <TextField
            placeholder={'Enter Card Holder Name'}
            value={holderName}
            onChangeText={text => setHolderName(text)}
          />
        </View>
        {holderNameValidError && !holderName && (
          <Text style={{color: 'red'}}>{holderNameValidError}</Text>
        )}
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{...styles.labelName, marginTop: 24}}>
              Expiration Date
            </Text>
            <View
              style={{
                ...styles.textInput,
                width: 165,
                borderColor: exDateValidError && !exDate ? 'red' : '#EBF0FF',
              }}>
              <TextField
                placeholder={'Enter Expiration Date'}
                value={exDate}
                keyboardType={'numeric'}
                onChangeText={text => setExDate(text)}
              />
            </View>
            {exDateValidError && !exDate && (
              <Text style={{color: 'red'}}>{exDateValidError}</Text>
            )}
          </View>
          <View style={{marginLeft: 13, marginBottom: 24}}>
            <Text style={{...styles.labelName, marginTop: 24}}>
              Security Code
            </Text>
            <View
              style={{
                ...styles.textInput,
                width: 165,
                borderColor:
                  securityCodeValidError && !securityCode ? 'red' : '#EBF0FF',
              }}>
              <TextField
                placeholder={'Enter Security Code'}
                keyboardType={'numeric'}
                value={securityCode}
                onChangeText={text => setSecurityCode(text)}
              />
            </View>
            {securityCodeValidError && !securityCode && (
              <Text style={{color: 'red'}}>{securityCodeValidError}</Text>
            )}
          </View>
        </View>
        <Text style={styles.labelName}>Card Number</Text>
        <View
          style={{
            ...styles.textInput,
            borderColor:
              cardNumberValidError && !cardNumber ? 'red' : '#EBF0FF',
          }}>
          <TextField
            placeholder={'Enter Card Number'}
            keyboardType={'numeric'}
            value={cardNumber}
            onChangeText={text => setCardNumber(text)}
          />
        </View>
        {cardNumberValidError && !cardNumber && (
          <Text style={{color: 'red'}}>{cardNumberValidError}</Text>
        )}
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 16,
        }}>
        <Button
          // disabled={holderNameValidError}
          onPress={handleAddCard}
          name={'Add Card'}
        />
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
  cardInfo: {
    marginHorizontal: 16,
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
});

export default AddCard;

// onPress={() => {
//   handleAddCard;
//   navigation.navigate('UpdateCard', {
//     holderName,
//     exDate,
//     securityCode,
//     cardNumber,
//   });
// }}
