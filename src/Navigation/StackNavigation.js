import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegisterUser from '../Screens/RegisterUser';
import LoginUser from '../Screens/LoginUser';
import ProductDetail from '../Screens/ProductDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import LikeProduct from '../Screens/LikeProduct';
import PaymentMethod from '../Screens/PaymentMethod';
import ChooseCreditOrDebit from '../Screens/ChooseCreditOrDebit';
import CreditCard from '../Screens/CreditCard';
import AddCard from '../Screens/AddCard';
import UpdateCard from '../Screens/UpdateCard';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();
const user = auth()?.currentUser?.uid;
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'DrawerNavigation' : 'RegisterUser'}>
        {/* <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginUser"
          component={LoginUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LikeProduct"
          component={LikeProduct}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreditOrDebit"
          component={ChooseCreditOrDebit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreditCard"
          component={CreditCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateCard"
          component={UpdateCard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StackNavigation;
