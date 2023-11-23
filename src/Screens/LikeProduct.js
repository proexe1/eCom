import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Images} from '../Helpers/Images';
import {hp, wp} from '../Helpers/Constant';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cart = ({navigation}) => {
  const cart = useSelector(state => state?.counter);
  const handleCartItem = ({item}) => {
    return (
      <View style={styles.cartProduct}>
        <Image
          style={styles.cartProductImage}
          source={{uri: item?.thumbnail}}
        />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={{justifyContent: 'space-between', paddingLeft: 5}}>
            <Text numberOfLines={1} style={{fontWeight: 'bold'}}>
              {item?.title}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text style={{fontWeight: 'bold', color: '#40BFFF'}}>
                ${item?.price}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Text
                    style={{
                      borderWidth: 1,
                      width: 32,
                      height: 24,
                      textAlign: 'center',
                      borderRadius: 5,
                      borderColor: '#EBF0FF',
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      borderWidth: 1,
                      width: 32,
                      height: 24,
                      textAlign: 'center',
                      borderColor: '#EBF0FF',
                      backgroundColor: '#EBF0FF',
                    }}>
                    1
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      borderWidth: 1,
                      width: 32,
                      height: 24,
                      textAlign: 'center',
                      borderRadius: 5,
                      borderColor: '#EBF0FF',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingRight: 10}}>
              <Image style={styles.like} source={Images.love} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{...styles.like}} source={Images.Trash} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>liked Products</Text>
      <View style={styles.SingleLine} />
      <ScrollView bounces={false}>
        <FlatList
          data={cart.cart}
          bounces={false}
          style={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
          renderItem={handleCartItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cartProduct: {
    margin: 5,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: '#EBF0FF',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  cartProductImage: {width: 72, height: 72},
  like: {width: wp(6.4), height: wp(6.4)},
  SingleLine: {
    height: hp(0.1),
    backgroundColor: '#EBF0FF',
    marginVertical: 17,
  },
});

export default Cart;
