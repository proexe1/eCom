import React, {Component, useEffect, useRef, useState} from 'react';
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
import {useRoute} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {GlobalStyle} from '../Helpers/GlobalStyle';
import Button from '../Components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../Redux/Actions/Actions';
import USER from '../Redux/Constant';

const ProductDetail = ({navigation, item}) => {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const route = useRoute().params;
  const isCarousel = useRef(null);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image style={styles.imageStyle} source={{uri: item}} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.HeaderParentView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.Left} source={Images.Left} />
            </TouchableOpacity>
            <Text style={styles.ProductTitle}>{route.title}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image style={styles.Left} source={Images.Searchbar} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.Menu} source={Images.Menu} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.SingleLine} />
        <View style={{marginHorizontal: 16}}>
          <View>
            <Carousel
              data={route.images}
              renderItem={renderItem}
              sliderWidth={hp(100)}
              itemWidth={hp(100)}
              onSnapToItem={index => {
                setActiveIndex(index);
              }}
            />
            <Pagination
              style={styles.Pagination}
              activeDotIndex={activeIndex}
              carouselRef={isCarousel}
              tappableDots={true}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              dotsLength={route.images.length}
              inactiveDotStyle={{
                backgroundColor: 'grey',
                width: 10,
                height: 10,
              }}
            />
          </View>
          <View style={styles.ProductNameAndLike}>
            <Text style={{...styles.ThumbnailName, fontSize: 20}}>
              {route?.title}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setLiked(isLiked => !isLiked);
              }}>
              {liked ? (
                <Image style={styles.Like} source={Images.Heart} />
              ) : (
                <Image style={styles.Like} source={Images.love} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 8, flexDirection: 'row'}}>
            <FlatList
              scrollEnabled={false}
              data={Array(Number(5)).fill('')}
              horizontal
              renderItem={({index}) => {
                console.log(index, route?.rating.toFixed(0));
                return index < Number(route?.rating.toFixed(0)) ? (
                  <Image
                    style={{height: 20, width: 20}}
                    source={Images.Yellow_Star}
                  />
                ) : (
                  <Image
                    style={{height: 20, width: 20, tintColor: '#E8E8E8'}}
                    source={Images.Yellow_Star}
                  />
                );
              }}
            />
          </View>
          <Text style={styles.ProductPrice}>${route?.price}</Text>
          <View style={{marginTop: 24}}>
            <Text style={{...styles.ThumbnailName, fontSize: 20}}>
              Specification
            </Text>
            <Text style={styles.ProductDescription}>{route?.description}</Text>
            <View style={styles.ProductOtherInfo}>
              <Text style={styles.ProductInfoLabel}>Discount : </Text>
              <Text style={styles.ProductInfo}>
                {route?.discountPercentage} %
              </Text>
            </View>
            <View style={styles.ProductOtherInfo}>
              <Text style={styles.ProductInfoLabel}>Stock : </Text>
              <Text style={styles.ProductInfo}>{route?.stock}</Text>
            </View>
            <View style={styles.ProductOtherInfo}>
              <Text style={styles.ProductInfoLabel}>Brand : </Text>
              <Text style={styles.ProductInfo}>{route?.brand}</Text>
            </View>
            <View style={styles.ProductOtherInfo}>
              <Text style={styles.ProductInfoLabel}>Category : </Text>
              <Text style={styles.ProductInfo}>{route.category}</Text>
            </View>
            <View style={{width: 40, height: 40}}>
              <Image
                style={{width: 40, height: 40}}
                source={{uri: route?.thumbnail}}
              />
            </View>
          </View>
          <View>
            <Button
              name={'Add To Cart'}
              // onPress={() => navigation.navigate('Cart', route)}
              onPress={() => {
                dispatch(addToCart(route)), navigation.navigate('Cart');
                console.log('addToCart(route)addToCart(route)', route);
              }}
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
  Left: {
    tintColor: '#9098B1',
    width: wp(6.4),
    height: wp(6.4),
  },
  Menu: {
    tintColor: '#9098B1',
    width: wp(6.4),
    height: wp(6.4),
    marginLeft: hp(4.2),
  },
  SingleLine: {
    height: hp(0.2),
    backgroundColor: '#EBF0FF',
    marginVertical: wp(4.2),
    width: hp(100),
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
  imageStyle: {
    resizeMode: 'contain',
    width: wp(91.46),
    height: hp(25.36),
  },
  FlashSaleParentView: {
    width: wp(37.6),
    height: hp(25.86),
    marginLeft: wp(4.2),
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#EBF0FF',
  },
  ThumbnailImage: {width: wp(29.6), height: hp(13.42), marginTop: hp(1.9)},
  ThumbnailName: GlobalStyle.fontWeight,
  HeaderParentView: {
    marginHorizontal: wp(4.2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProductNameAndLike: {flexDirection: 'row', justifyContent: 'space-between'},
  Like: {width: wp(6.4), height: wp(6.4)},
  ProductPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#40BFFF',
    marginTop: hp(1.9),
  },
  ProductDescription: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: hp(1.4),
    color: '#9098B1',
  },
  ProductOtherInfo: {
    flexDirection: 'row',
    marginTop: hp(1.23),
    alignItems: 'center',
  },
  ProductInfoLabel: {fontSize: 15, fontWeight: 'bold', color: '#9098B1'},
  ProductInfo: {color: '#40BFFF', fontWeight: '500', fontSize: 17},
  ProductTitle: {marginLeft: 12, fontWeight: 'bold'},
});

export default ProductDetail;

{
  /* <ProductSlider /> */
}

{
  /* <View><Text>{item.category}</Text></View> */
}
{
  /* {category?.map(item=>{
            return(
                <Text>{item.brand}</Text>
            )
          })} */
}
{
  /* <FlatList
          style={{ }}
            scrollEnabled={false}
            data={Array(Number(5-route?.rating?.toFixed(0))).fill('')}
            horizontal
            renderItem={() => {
              return  <Image style={{height: 20, width: 20
              }} source={Images.Notification}/>
            }}
          /> */
}
{
  /* <Rating
            type="star"
            readonly
            ratingCount={5}
            imageSize={30}
            onFinishRating={route?.rating}
          /> */
}
