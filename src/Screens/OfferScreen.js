import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {hp, wp} from '../Helpers/Constant';
import {Images} from '../Helpers/Images';
import {useSelector, useDispatch} from 'react-redux';
import {filterData, requestUsers} from '../Redux/Actions/Actions';
import {Products} from '../Helpers/JsonData';
import {GlobalStyle} from '../Helpers/GlobalStyle';

const OfferScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState();
  const {
    usersData,
    isLoading,
    filterData: filterData2,
  } = useSelector(state => state);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState();
  const [abcData, setAbcData] = useState();
  const [starData, setStarData] = useState();
  console.log('filterData2--', abcData);

  const data = [
    {url: Images.All},
    {url: Images.Phone},
    {url: Images.laptop},
    {url: Images.Fragrances},
    {url: Images.SkinCare},
    {url: Images.groceries},
    {url: Images.HomeDecore},
  ];

  const abc = ['View All', '1', '2', '3', '4', '5'];

  useEffect(() => {
    dispatch(requestUsers(Products?.products));
    removeDuplicates(Products?.products);
  }, [usersData]);

  const handleSearch = text => {
    setSearchText(text);

    const filtered = Products?.products.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredData(filtered);
  };

  const removeDuplicates = arr => {
    let unique = [{category: 'All View'}];
    arr?.map(element => {
      if (!unique.some(item => item.category === element.category)) {
        let temp = {
          category: element.category,
        };
        unique.push(temp);
      }
    });
    setCategory(unique);
  };

  const handleFilterCategory = category => {
    setAbcData(category);
    const temp = Products?.products.filter(item => item.category == category);
    dispatch(filterData(temp));
  };

  // const handleStarCategory = item => {
  //   console.log('star', item);
  //   setStarData(item);
  //   let tmpFilterItem = []
  //   const temp = Products?.products.filter(star => {
  //     console.log('star.category',star.category == abcData);
  //     if (star.rating == item && star.category == abcData) {
  //      tmpFilterItem.push(star)
  //     }
  //   });
  //   console.log('item--------------mmm', tmpFilterItem, temp);

  //   dispatch(filterData(temp));
  // };

  const handleStarCategory = (item) =>{
    setStarData(item);
    const temp = Products?.products.filter(star => star.rating == item);
    dispatch(filterData(temp));
  }

  const handleFilterData  = () =>{
    const temp = Products.products
    .filter(item =>{
      item.category == category
    })
    .filter(item =>{
      item.rating == item
    })
    // console.log('temp----------iii',rating);
    setFilteredData(temp)
  }
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.categoryParentView}
        onPress={() => handleFilterCategory(item.category)}>
        <View
          style={{
            ...styles.categoryImageView,
            borderColor: item.category == abcData ? '#40BFFF' : '#EBF0FF',
          }}>
          <Image style={styles.CategoryImage} source={data[index]?.url} />
        </View>
        <Text style={{fontSize: 15}}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  const FlashSaleItem = ({item, index}) => {
    return (
      <View style={{flex: 1, marginHorizontal: 16, marginTop: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail', item);
          }}
          style={styles.FlashSaleItem}>
          <Image style={styles.ThumbnailImage} source={{uri: item.thumbnail}} />
          <View>
            <Text
              numberOfLines={1}
              style={{
                ...styles.ThumbnailName,
                paddingVertical: 8,
                fontFamily: 'Poppins-Thin',
              }}>
              {' '}
              {item.title}
            </Text>
          <FlatList
            scrollEnabled={false}
            data={Array(Number(5)).fill('')}
            horizontal
            renderItem={({index}) => {
              console.log(index , item?.rating.toFixed(0))
              return index < Number(item?.rating.toFixed(0)) ? (
                <Image
                  style={{height: 20, width: 20}}
                  source={Images.Yellow_Star}
                />
              ) : (
                <Image style={{height: 20, width: 20,tintColor:'#E8E8E8'}} source={Images.Yellow_Star} />
              );
            }}
          />
            <Text
              style={{
                ...styles.ThumbnailName,
                paddingBottom: 8,
                color: '#40BFFF',
                fontFamily: 'Poppins-Thin',
              }}>
              $ {item.price}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: 'gray',
                  textDecorationLine: 'line-through',
                  fontFamily: 'Poppins-Medium',
                }}>
                $800
              </Text>
              <Text
                style={{
                  ...styles.ThumbnailName,
                  paddingBottom: 8,
                  color: '#FB7181',
                  fontFamily: 'Poppins-Thin',
                }}>
                {item.discountPercentage} % OFF
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SearchAreaPortion}>
        <View style={styles.Searchbar}>
          <TextInput
            style={{flex: 1, height: 50}}
            placeholder="Search Product"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity>
          <Image style={styles.SocialIcon} source={Images.love} />
        </TouchableOpacity>
        <TouchableOpacity>
          <ImageBackground
            style={styles.SocialIcon}
            source={Images.Notification}></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.SingleLine} />
      <View style={{marginHorizontal: 16}}>
        <View style={styles.CategoryHeading}>
          <Text style={styles.FirstHeader}>category</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
            <Text style={styles.SecondHeader}>More Category</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            bounces={false}
            style={{marginTop: 12}}
            showsHorizontalScrollIndicator={false}
            data={category}
            renderItem={renderItem}
            keyExtractor={({index}) => index}
            horizontal={true}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={['View All', '1', '2', '3', '4', '5']}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  ...styles.RatingFlatList,
                  borderColor: item == starData ? '#40BFFF' : '#EBF0FF',
                }}
                onPress={() => handleFilterData(item)}>
                {item == 'View All' ? (
                  <Text>{item}</Text>
                ) : (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={Images.Star}
                    />
                    <Text>{item}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {isLoading && (
        <View>
          <Text>Data loading...</Text>
        </View>
      )}
      <FlatList
        bounces={false}
        style={styles.FlashSaleFlatList}
        showsHorizontalScrollIndicator={false}
        // data={searchText.length > 0 ? filteredData : Products?.products }
        data={
          searchText.length > 0
            ? filteredData
            : abcData === 'All View' || starData === 'View All'
            ? Products.products
            : filterData2 || Products.products
        }
        // data={searchText.length > 0? filteredData : starData == 'View All' ? Products.products : filterData2 || Products.products}
        renderItem={FlashSaleItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
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
    height: hp(0.1),
    backgroundColor: '#EBF0FF',
    marginVertical: 17,
  },
  CategoryHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FirstHeader: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#223263',
  },
  SecondHeader: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#40BFFF',
  },
  SearchAreaPortion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: hp(1.9),
  },
  categoryParentView: {
    width: wp(26.66),
    height: hp(13.54),
    alignItems: 'center',
  },
  categoryImageView: {
    width: wp(18.66),
    height: wp(18.66),
    borderWidth: 1,
    borderRadius: wp(18.66),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EBF0FF',
  },
  CategoryImage: {width: wp(6.4), height: wp(6.4), tintColor: '#40BFFF'},
  FlashSaleItem: {
    marginRight: wp(3.4),
    marginBottom: wp(1.6),
    width: 165,
    height: 255,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    paddingHorizontal: 20,
  },
  ThumbnailImage: {
    width: wp(29),
    height: wp(29),
    marginTop: hp(1.9),
    resizeMode: 'contain',
    backgroundColor: '#f6f6f6',
    borderRadius: 5,
  },
  ThumbnailName: GlobalStyle.fontWeight,
  ViewAllString: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 12,
    width: wp(37.5),
    height: hp(13.33),
    borderColor: '#EBF0FF',
    textAlign: 'center',
    paddingTop: hp(1.8),
  },
  RatingFlatList: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: wp(3.2),
    width: wp(16.53),
    height: hp(6.15),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#EBF0FF',
  },
  FlashSaleFlatList: {
    // marginTop: hp(2.4),
    // marginHorizontal: wp(1.33),
    // marginBottom: hp(30),
  },
});

export default OfferScreen;

{
  /* {category?.map((star,index)=>
          <Image style={{width:10,height:10}} source={Images.Star}/>
        )} */
}
{
  /* {new Array(category.rating).fill(null).map(()=>(
          <Image style={{width:10,height:10}} source={Images.Star}/>
        ))} */
}

{
  /* <View
            style={{
              justifyContent: 'flex-end',
              paddingTop: 8,
            }}>
            <TouchableOpacity style={{position: 'absolute', top: 50}}>
              <Image
                style={{width: wp(6.4), height: wp(6.4), marginLeft: 110}}
                source={Images.Trash}
              />
            </TouchableOpacity>
          </View> */
}
