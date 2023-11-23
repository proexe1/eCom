import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Images} from '../Helpers/Images';
import {fontSize, hp, wp} from '../Helpers/Constant';
import {addToCart, deleteToCart, removeToCart} from '../Redux/Actions/Actions';
import NoProductFound from '../Components/NoProductFound';
import {Colors} from '../Helpers/Colors';
import DashedLine from 'react-native-dashed-line';
import Button from '../Components/Button';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state?.counter);
  const handleDeleteProduct = RemovedData => {
    dispatch(removeToCart(RemovedData));
  };

  const renderItems = ({item}) => {
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
                <Text style={styles.ProductPrice}>
                  ${item?.price * item?.qty}
                </Text>
                <View style={{flexDirection: 'row', paddingLeft: 10}}>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(deleteToCart(item));
                      console.log('minus event ::', item?.qty);
                    }}>
                    <Text style={styles.counterSign}>-</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.counterItem}>{item?.qty}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => dispatch(addToCart(item))}>
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

  const RenderBill = () => {
    let itemsTotal = 0;

    // TotalPrice
    cart.cart.forEach(item => {
      itemsTotal += item.price * item.qty;
    });

    const shippingCharge = 40.0; //fix
    const importCharges = 10.0; // fix
    const totalAmount = itemsTotal + shippingCharge + importCharges; // 0 + 40 + 10

    return (
      <View style={styles.BillingParentView}>
        <View style={styles.BillingContentView}>
          <Text style={styles.BillingText}>Items</Text>
          <Text style={styles.BillingContentPrice}>
            ${itemsTotal.toFixed(2)}
          </Text>
        </View>
        <View style={styles.BillingContentView}>
          <Text style={styles.BillingText}>Shipping</Text>
          <Text style={styles.BillingContentPrice}>
            ${shippingCharge.toFixed(2)}
          </Text>
        </View>
        <View style={styles.BillingContentView}>
          <Text style={styles.BillingText}>Import charges</Text>
          <Text style={styles.BillingContentPrice}>
            ${importCharges.toFixed(2)}
          </Text>
        </View>
        <DashedLine dashLength={5} dashColor="#EBF0FF" dashGap={5} />
        <View style={styles.TotalPrice}>
          <Text style={styles.TotalPriceText}>Total Price</Text>
          <Text style={styles.TotalPriceRate}>${totalAmount.toFixed(2)}</Text>
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
      {cart?.cart?.length ? (
        <ScrollView bounces={false}>
          <View>
            <FlatList
              data={cart?.cart}
              bounces={false}
              style={styles.flatListStyle}
              showsVerticalScrollIndicator={false}
              renderItem={renderItems}
            />
            <RenderBill />

            <View style={{alignItems: 'center'}}>
              <Button
                name={'Check Out'}
                onPress={() => {
                  navigation.navigate('PaymentMethod');
                }}
              />
            </View>
          </View>
        </ScrollView>
      ) : (
        <NoProductFound />
      )}
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
  ProductName: {justifyContent: 'space-between', paddingLeft: 12},
  ProductTitle: {fontWeight: 'bold', color: '#223263', width: 180},
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
  BillingParentView: {
    borderWidth: 2,
    borderColor: Colors.borderColor,
    borderRadius: 5,
    marginTop: hp(3.9),
    marginHorizontal: 17,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  BillingContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: hp(1.4),
  },
  BillingText: {
    fontFamily: 'Poppins',
    fontSize: fontSize(18),
    color: Colors.textColor,
  },
  BillingContentPrice: {
    fontFamily: 'Poppins',
    fontSize: fontSize(18),
    color: Colors.textColor,
  },
  TotalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  TotalPriceText: {
    fontFamily: 'Poppins-Bold',
    fontSize: fontSize(18),
    color: Colors.HeaderTextColor,
    letterSpacing: 0.5,
  },
  TotalPriceRate: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: fontSize(18),
    color: Colors.CommonTextColor,
  },
});

export default Cart;
