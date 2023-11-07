//  add delete product on press of Images.Trash using thunk redux ::
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
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, deleteToCart, removeToCart} from '../Redux/Actions/Actions';
import NoProductFound from '../Components/NoProductFound';
const Cart = ({navigation}) => {
  const cart = useSelector(state => state);
  console.log('cartcartcart abnhay', cart);
  const dispatch = useDispatch();

  const handleDeleteProduct = RemovedData => {
    dispatch(removeToCart(RemovedData));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(deleteToCart(item));
  };

  const handleCartItem = ({item}) => {
    console.log('item', item);
    return (
      <View>
        <View style={styles.cartProduct}>
          <Image
            style={styles.cartProductImage}
            source={{uri: item?.thumbnail}}
          />
          <View style={styles.ProductDetails}>
            <View style={styles.ProductName}>
              <Text numberOfLines={1} style={styles.ProductTitle}>
                {item?.title}
              </Text>
              <View style={styles.ProductPriceAndCounter}>
                <Text style={styles.ProductPrice}>${item?.price}</Text>
                <View style={{flexDirection: 'row', paddingLeft: 10}}>
                  <TouchableOpacity>
                    <Text style={styles.counterSign}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.counterItem}>{item?.qty}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('itemitemitemitemitemitemitem', item);
                      dispatch(addToCart(item));
                    }}>
                    <Text style={styles.counterSign}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{paddingRight: 10}}>
                <Image style={styles.like} source={Images.love} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteProduct(item?.id)}>
                <Image style={{...styles.like}} source={Images.Trash} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ProfileHeaderView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.LeftIcon} source={Images.Left} />
        </TouchableOpacity>
        <Text style={styles.ProfileString}>Cart</Text>
      </View>
      <View style={styles.SingleLine} />
      {console.log('cart', cart)}
      <ScrollView bounces={false}>
        <FlatList
          data={cart?.cart}
          bounces={false}
          style={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            console.log('qwerty',item);
            return (
              <View>
                <View style={styles.cartProduct}>
                  <Image
                    style={styles.cartProductImage}
                    source={{uri: item?.thumbnail}}
                  />
                  <View style={styles.ProductDetails}>
                    <View style={styles.ProductName}>
                      <Text numberOfLines={1} style={styles.ProductTitle}>
                        {item?.title}
                      </Text>
                      <View style={styles.ProductPriceAndCounter}>
                        <Text style={styles.ProductPrice}>${item?.price}</Text>
                        <View style={{flexDirection: 'row', paddingLeft: 10}}>
                          <TouchableOpacity onPress={() =>handleDecreaseQuantity(item)}>
                            <Text style={styles.counterSign}>-</Text>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Text style={styles.counterItem}>{item?.qty}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              // console.log('itemitemitemitemitemitemitem', item);
                              dispatch(addToCart(item));
                            }}>
                            <Text style={styles.counterSign}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity style={{paddingRight: 10}}>
                        <Image style={styles.like} source={Images.love} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => handleDeleteProduct(item?.id)}>
                        <Image style={{...styles.like}} source={Images.Trash} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
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
  cartProductImage: {
    width: 72,
    height: 72,
    borderRadius: 5,
    backgroundColor: '#EBF0FF',
  },
  like: {width: wp(6.4), height: wp(6.4)},
  ProductDetails: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  ProductName: {justifyContent: 'space-between', paddingLeft: 12,},
  ProductTitle: {fontWeight: 'bold', color: '#223263',width:180},
  ProductPriceAndCounter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ProductPrice: {fontWeight: 'bold', color: '#40BFFF', alignSelf: 'center'},
  counterSign: {
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 3,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#EBF0FF',
  },
  counterItem: {
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 3,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#EBF0FF',
    backgroundColor: '#EBF0FF',
  },
  ProfileHeaderView: {flexDirection: 'row', marginHorizontal: 16},
  LeftIcon: {width: 24, height: 24},
  ProfileString: {fontSize: 16, fontWeight: '700'},
  SingleLine: {
    height: hp(0.2),
    backgroundColor: '#EBF0FF',
    marginVertical: wp(4.2),
    width: hp(100),
  },
});

export default Cart;
