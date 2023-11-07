import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import UserProfile from '../Screens/UserProfile';
import Explore from '../Screens/Explore';
import OfferScreen from '../Screens/OfferScreen';
import Cart from '../Screens/Cart';
import { Images } from '../Helpers/Images';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'OfferScreen') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'UserProfile') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          return (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#40BFFF' : 'gray',
              }}
              source={
                route.name == 'HomeScreen'
                  ? Images.Home
                  : route.name == 'OfferScreen'
                  ? Images.Offer
                  : route.name == 'UserProfile'
                  ? Images.user
                  : route.name == 'Explore'
                  ? Images.Searchbar
                  : route.name == 'Cart'
                  ? Images.groceries
                  : null
              }
            />
          );
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}} />
      <Tab.Screen
        name="OfferScreen"
        component={OfferScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigation;
