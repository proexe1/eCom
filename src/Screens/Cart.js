import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {hp, wp} from '../Helpers/Constant';
import {Images} from '../Helpers/Images';
import {useRoute} from '@react-navigation/native';
import {GlobalStyle} from '../Helpers/GlobalStyle';

const Cart = ({navigation, item}) => {
  console.log('item-------------====', item);
  const [activeIndex, setActiveIndex] = useState(0);
  const route = useRoute().params;

  console.log('route--------------------------======', route);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image style={styles.imageStyle} source={{uri: item}} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartProduct}>
        <Image
          style={styles.cartProductImage}
          source={{uri: route.thumbnail}}
        />
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
        <View style={{justifyContent:'space-between',paddingRight:12}}>
            <Text style={{fontWeight:'bold'}}>{route.title}</Text>
            <Text style={{fontWeight:'bold',color:'#40BFFF'}}>${route?.price}</Text>
        </View>
        <View style={{flexDirection: 'row', }}>
            <TouchableOpacity style={{paddingRight:10,}}>
              <Image style={styles.like} source={Images.love} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{...styles.like}} source={Images.Trash} />
            </TouchableOpacity>
        </View>

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
  cartProduct: {
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor:'#EBF0FF',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  cartProductImage: {width: 72, height: 72},
  like: {width: wp(6.4), height: wp(6.4)},
});

export default Cart;
