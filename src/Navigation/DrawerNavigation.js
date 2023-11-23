import React, {Component, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigation from './TabNavigator';
import DrawerComponent from '../Components/navigationComponent/DrawerComponet';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  console.log('AR');
  return (
    <Drawer.Navigator
      initialRouteName="Home Screen"
      drawerContent={() => <DrawerComponent />}>
      <Drawer.Screen
        name="Tab"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      {/* <Drawer.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Cart Items"
        component={Cart}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="User Profile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="OfferScreen"
        component={OfferScreen}
        options={{headerShown: false}}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
