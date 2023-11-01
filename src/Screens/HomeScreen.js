import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import {hp, wp} from '../Helpers/Constant';
import Slider from '../Components/Slider';
import {useSelector, useDispatch} from 'react-redux';
import {requestUsers} from '../Redux/Actions/Actions';
import {Products} from '../Helpers/JsonData';
import {GlobalStyle} from '../Helpers/GlobalStyle';

const HomeScreen = ({navigation}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(Products?.products));
  }, [usersData]); // asked shubhambhai [...]

  const {usersData, isLoading} = useSelector(state => state);

  const FlashSaleItem = ({item, index}) => {
    return (
      <View style={styles.FlashSaleItem}>
        <Image style={styles.FlashSaleImage} source={{uri: item.thumbnail}} />
        <View style={styles.FlashImageData}>
          <Text numberOfLines={1} style={{...styles.CategoryName, paddingBottom: 8,fontFamily:'Poppins-Light'}}>
            {item.title}
          </Text>
          <Text
            style={{
              ...styles.CategoryName,
              paddingBottom: 8,
              color: '#40BFFF',
              fontFamily:'Poppins-Light'
            }}>
            $ {item.price}
          </Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:'gray',textDecorationLine: 'line-through',}}>$800 </Text>
            <Text
              style={{
                ...styles.CategoryName,
                paddingBottom: 8,
                color: '#FB7181',
                fontFamily:'Poppins-Light'
              }}>
               {item.discountPercentage}% off
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SingleLine} />
      <View style={{marginHorizontal: 16}}>
        <Slider />
        {isLoading && (
          <View>
            <Text>Data loading...</Text>
          </View>
        )}
        <View style={{...styles.CategoryHeading, marginTop: hp(1.5)}}>
          <Text style={styles.FirstHeader}>Flash Sale</Text>
          <TouchableOpacity onPress={() => navigation.navigate('OfferScreen')}>
            <Text style={styles.SecondHeader}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={{marginTop: hp(2.4)}}
            showsHorizontalScrollIndicator={false}
            data={Products?.products?.slice(0, 5)}
            renderItem={FlashSaleItem}
            horizontal={true}
            bounces={false}
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
    borderColor: '#9098B1',
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
    backgroundColor: '#EBF0FF',
    marginVertical: wp(4.2),
    width: hp(100),
  },
  CategoryHeading: {flexDirection: 'row', justifyContent: 'space-between'},
  FirstHeader: {fontSize: wp(4), fontWeight: '700', color: '#223263'},
  SecondHeader: {fontSize: wp(4), fontWeight: '700', color: '#40BFFF'},
  SearchAreaPortion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: hp(1.9),
  },
  category_Image: {
    width: wp(18.66),
    height: wp(18.66),
    tintColor: '#40BFFF',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: wp(18.66),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EBF0FF',
  },
  CategorySection: {
    marginLeft: wp(4.8),
    width: wp(26.66),
    height: hp(13.54),
    alignItems: 'center',
  },
  CategoryImages: {width: wp(6.4), height: wp(6.4), tintColor: '#40BFFF'},
  FlashSaleItem: {
    width: wp(37.6),
    height: hp(25.86),
    marginRight: wp(4.2),
    borderWidth: wp(0.5),
    borderRadius: 5,
    borderColor: '#EBF0FF',
    paddingHorizontal: 16
  },
  FlashSaleImage: {
    width: wp(29.6),
    height: wp(29.6),
    marginTop: hp(1.9),
    borderRadius: 5,
  },
  FlashImageData: {marginTop: hp(0.98)},
  CategoryName: GlobalStyle.fontWeight,
});

export default HomeScreen;
