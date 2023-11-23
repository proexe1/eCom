import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fontSize, hp, wp} from '../Helpers/Constant';
import {Images} from '../Helpers/Images';
import TextField from '../Components/TextField';
import {useSelector, useDispatch} from 'react-redux';
import {requestUsers} from '../Redux/Actions/Actions';
import {Products} from '../Helpers/JsonData';
import {useNavigation} from '@react-navigation/native';

const data = [
  {url: Images.All},
  {url: Images.Phone},
  {url: Images.laptop},
  {url: Images.Fragrances},
  {url: Images.SkinCare},
  {url: Images.groceries},
  {url: Images.HomeDecore},
];

const Explore = () => {
  const [category, setCategory] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  const {usersData, isLoading} = useSelector(state => state?.counter);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    abc();
    dispatch(requestUsers());
    removeDuplicates(Products?.products);
  }, [usersData]);

  const abc = async () => {
    var size = 5;
    var items = await usersData?.slice(0, size).map(i => {
      return i;
    });
    setFlashSale(items);
  };

  const removeDuplicates = arr => {
    const unique = [{category: 'All View'}];
    arr?.map(element => {
      if (!unique.some(item => item.category === element.category)) {
        let temp = {
          category: element.category,
        };
        return unique.push(temp);
      }
    });
    setCategory(unique);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.CategorySection}>
        <View style={styles.category_Image}>
          <Image style={styles.CategoryImages} source={data[index]?.url} />
        </View>
        <Text
          style={{
            marginVertical: hp(1),
            fontSize: fontSize(16),
            fontFamily: 'Poppins-Medium',
            color: 'grey',
          }}>
          {item?.category}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SearchAreaPortion}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{width: 20, height: 20, marginRight: 5, tintColor: 'gray'}}
            source={Images.NavBar}
          />
        </TouchableOpacity>
        <View style={styles.Searchbar}>
          <Image style={styles.SearchIcon} source={Images.Searchbar} />
          <TextField placeholder={'Search Product'} />
        </View>
        <Image style={styles.SocialIcon} source={Images.love} />
        <Image style={styles.SocialIcon} source={Images.Notification} />
        <Image style={styles.DoteOnBellIcon} source={Images.Dote} />
      </View>
      <View style={styles.SingleLine} />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, marginTop: hp(1), marginHorizontal: wp(3)}}>
          {isLoading && (
            <View>
              <Text>Data loading...</Text>
            </View>
          )}
          <View style={{justifyContent: 'space-between', flex: 1}}>
            <FlatList
              data={category}
              numColumns={2}
              bounces={false}
              keyExtractor={({index}) => index}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Searchbar: {
    width: wp(60),
    borderRadius: 6,
    borderWidth: wp(0.2),
    borderColor: '#9098B1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp(4.2),
    marginLeft: wp(4.2),
    paddingVertical: hp(0.5),
  },
  SearchIcon: {
    width: wp(4.2),
    height: wp(4.2),
  },
  SocialIcon: {
    width: wp(6.4),
    height: wp(6.4),
    marginLeft: wp(3),
  },
  DoteOnBellIcon: {
    width: wp(2.1),
    height: wp(2.1),
    marginLeft: -9,
    marginTop: -15,
  },
  SingleLine: {
    width: hp(100),
    height: hp(0.2),
    backgroundColor: '#EBF0FF',
    marginTop: hp(4.2),
  },
  CategoryHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FirstHeader: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#223263',
  },
  SecondHeader: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#40BFFF',
  },
  SearchAreaPortion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: hp(1.9),
    marginTop: hp(2),
  },
  category_Image: {
    width: wp(16),
    height: wp(16),
    tintColor: '#40BFFF',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: wp(18.66),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EBF0FF',
    marginTop: hp(1),
  },
  CategorySection: {
    flex: 1,
    margin: hp(2),
    padding: hp(1),
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: hp(0.2),
    borderColor: '#EBF0FF',
    borderRadius: hp(1),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {width: 3, height: 3},
  },
  CategoryImages: {
    height: hp(3.5),
    width: hp(3.5),
    tintColor: '#40BFFF',
  },
  FlashSaleItem: {
    width: wp(37.6),
    height: hp(25.86),
    marginLeft: wp(4.2),
    borderWidth: wp(0.5),
    borderRadius: wp(0.5),
    alignItems: 'center',
    borderColor: '#EBF0FF',
  },
  FlashSaleImage: {
    width: wp(29.6),
    height: wp(29.6),
    marginTop: hp(1.9),
  },
});

export default Explore;
