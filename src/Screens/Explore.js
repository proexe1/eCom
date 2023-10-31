import React, {Component, useEffect, useState} from 'react';
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
import {hp, wp} from '../Helpers/Constant';
import {Images} from '../Helpers/Images';
import TextField from '../Components/TextField';
import {useSelector, useDispatch} from 'react-redux';
import {requestUsers} from '../Redux/Actions/Actions';
import { Products, products } from '../Helpers/JsonData';


const data = [
  {url: Images.All},
  {url: Images.Phone},
  {url: Images.laptop},
  {url: Images.Fragrances},
  {url: Images.SkinCare},
  {url: Images.groceries},
  {url: Images.HomeDecore},
];

const Explore = ({navigation}) => {
  const [category, setCategory] = useState([]);
  const [flashSale, setFlashSale] = useState([]);
  const {usersData, isLoading} = useSelector(state => state);
  const dispatch = useDispatch();
  console.log('Products*****************',Products);

  useEffect(() => {
    abc();
    dispatch(requestUsers());
    removeDuplicates(Products?.products);
  }, [usersData]);

  const abc = async () => {
    var size = 5;
    var items = await usersData?.slice(0, size).map(i => {
      console.log(i);
      return i;
    });
    console.log(items);
    setFlashSale(items);
  };

  const removeDuplicates = arr => {
    const unique = [{category: 'All View'}];
    arr?.map(element => {
      if (!unique.some(item => item.category === element.category)) {
        let temp = {
          category: element.category,
          // image: element.thumbnail,
          // image : data[arr]?.url
        };
        console.log('unique--------------------------****', unique);
        // unique.push(temp);
        return unique.push(temp);
      }
    });
    setCategory(unique);
    console.log('unique--------------***', unique);
  };

  const renderItem = ({item, index}) => {
    const finalUrl = data.map(item => {
      return item.url;
    });

    return (
      <View style={styles.CategorySection}>
        <TouchableOpacity>
          <View style={styles.category_Image}>
            <Image style={styles.CategoryImages} source={data[index]?.url} />
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: hp(2.21)}}>{item?.category}</Text>
      </View>
    );
  };
  return (
      <SafeAreaView style={styles.container}>
    <ScrollView>
        <View style={styles.SearchAreaPortion}>
          <View style={styles.Searchbar}>
            <Image style={styles.SearchIcon} source={Images.Searchbar} />
            <TextField placeholder={'Search Product'} />
          </View>
          <Image style={styles.SocialIcon} source={Images.love} />
          <Image style={styles.SocialIcon} source={Images.Notification} />
          <Image style={styles.DoteOnBellIcon} source={Images.Dote} />
        </View>
        <View style={styles.SingleLine} />
        <View style={{marginHorizontal: 16,flex:1,}}>
          {isLoading && (
            <View>
              <Text>Data loading...</Text>
            </View>
          )}
          <View style={{justifyContent:'space-between',flex:1,}}>
            <FlatList
              style={{marginTop: hp(1.4)}}
              showsHorizontalScrollIndicator={false}
              data={category}
              renderItem={renderItem}
              keyExtractor={({index}) => index}
              numColumns={2}
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
    marginLeft: -9,
    marginTop: -15,
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
    flex:1,
    alignItems:'center'
  },
  CategoryImages: {width: wp(6.4), height: wp(6.4), tintColor: '#40BFFF'},
  FlashSaleItem: {
    width: wp(37.6),
    height: hp(25.86),
    marginLeft: wp(4.2),
    borderWidth: wp(0.5),
    borderRadius: wp(0.5),
    alignItems: 'center',
    borderColor: '#EBF0FF',
  },
  FlashSaleImage: {width: wp(29.6), height: wp(29.6), marginTop: hp(1.9)},
});

export default Explore;
