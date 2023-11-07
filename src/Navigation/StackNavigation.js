import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegisterUser from '../Screens/RegisterUser';
import LoginUser from '../Screens/LoginUser';
import ProductDetail from '../Screens/ProductDetail';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import LikeProduct from '../Screens/LikeProduct';

const Stack = createNativeStackNavigator();
const user = auth()?.currentUser?.uid;
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'HomeScreen' : 'RegisterUser'}>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
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
