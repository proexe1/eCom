import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {fontSize, hp, wp} from '../Helpers/Constant';
import Slider from '../Components/Slider';
import {useSelector, useDispatch} from 'react-redux';
import {ABC} from '../Redux/Actions/Actions';
import {Products} from '../Helpers/JsonData';
import {GlobalStyle} from '../Helpers/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../Helpers/Colors';
import {Images} from '../Helpers/Images';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // useEffect(() => {
  //   dispatch(requestUsers(Products?.products));
  // }, [usersData]);

  const {isLoading} = useSelector(state => state?.counter);

  const renderItem = ({item}) => {
    return (
      <View style={styles.FlashSaleItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetail', item)}>
          <Image
            style={styles.FlashSaleImage}
            source={{uri: item?.thumbnail}}
          />
          <View style={styles.FlashImageData}>
            <Text
              numberOfLines={1}
              style={{
                ...styles.CategoryName,
                paddingBottom: 8,
                fontFamily: 'Poppins-Light',
              }}>
              {item?.title}
            </Text>
            <Text
              style={{
                ...styles.CategoryName,
                paddingBottom: 8,
                color: '#40BFFF',
                fontFamily: 'Poppins-Light',
              }}>
              ${item?.price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: hp(0.5),
              }}>
              <Text
                style={{
                  color: 'gray',
                  textDecorationLine: 'line-through',
                  fontSize: fontSize(12),
                }}>
                $800
              </Text>
              <Text style={styles.CategoryName1}>
                {item?.discountPercentage}% off
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={{width: 20, height: 20, marginLeft: 10}}
          source={Images.NavBar}
        />
      </TouchableOpacity>
      <View style={styles.SingleLine} />
      <View style={{marginHorizontal: 16}}>
        <Slider />
        {isLoading && (
          <View>
            <Text>Data loading...</Text>
          </View>
        )}
        <View style={{...styles.CategoryHeading, marginTop: hp(1.5)}}>
          <TouchableOpacity
            onPress={() => {
              dispatch(ABC());
            }}
            style={styles.FirstHeader}>
            <Text>Flash Sale</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OfferScreen')}>
            <Text style={styles.SecondHeader}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={Products?.products?.slice(0, 5)}
            style={{marginTop: hp(2.4)}}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            horizontal={true}
            renderItem={renderItem}
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
  Searchbar: {
    width: wp(70),
    borderRadius: 5,
    borderWidth: wp(0.2),
    borderColor: Colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(4.2),
  },
  SearchIcon: {
    width: wp(4.2),
    height: wp(4.2),
  },
  SocialIcon: {
    width: wp(6.4),
    height: wp(6.4),
    marginLeft: wp(4.2),
  },
  DoteOnBellIcon: {
    width: wp(2.1),
    height: wp(2.1),
    marginRight: 2,
    alignSelf: 'flex-end',
  },
  SingleLine: {
    height: hp(0.2),
    backgroundColor: Colors.SinglelineBackgroundColor,
    marginVertical: wp(4.2),
    width: hp(100),
  },
  CategoryHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FirstHeader: {
    fontSize: wp(4),
    color: Colors.FirstHeaderColor,
    fontFamily: 'Poppins-Bold',
  },
  SecondHeader: {
    fontSize: wp(4),
    color: Colors.CommonTextColor,
    fontFamily: 'Poppins-Bold',
  },
  SearchAreaPortion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: hp(1.9),
  },
  category_Image: {
    width: wp(18.66),
    height: wp(18.66),
    tintColor: Colors.CommonTextColor,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: wp(18.66),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.borderColor,
  },
  CategorySection: {
    marginLeft: wp(4.8),
    width: wp(26.66),
    height: hp(13.54),
    alignItems: 'center',
  },
  CategoryImages: {
    width: wp(6.4),
    height: wp(6.4),
    tintColor: Colors.CommonTextColor,
  },
  FlashSaleItem: {
    width: wp(37.6),
    marginRight: wp(4.2),
    borderWidth: wp(0.5),
    borderRadius: 5,
    borderColor: '#EBF0FF',
    paddingHorizontal: 16,
    paddingVertical: hp(1),
  },
  FlashSaleImage: {
    width: wp(29.6),
    height: wp(29.6),
    marginTop: hp(0.9),
    borderRadius: 5,
  },
  FlashImageData: {marginTop: hp(0.98)},
  CategoryName: GlobalStyle.fontWeight,
  CategoryName1: {
    fontWeight: 'bold',
    color: Colors.offerTextColor,
    fontFamily: 'Poppins-Light',
    fontSize: fontSize(12),
    marginLeft: wp(2.13),
  },
});

export default HomeScreen;
