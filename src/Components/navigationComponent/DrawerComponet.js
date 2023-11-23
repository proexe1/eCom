import {useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const DrawerComponent = () => {
  const [selected, setSelected] = useState(true);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 3,
            backgroundColor: selected == true ? 'red' : null,
          }}
          onPress={() => {
            navigation.navigate('HomeScreen');
            setSelected(select => select);
          }}>
          <Text style={{fontSize: 20, padding: 5}}>HomeScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            padding: 10,
            marginBottom: 10,
            borderRadius: 3,
            backgroundColor: selected ? 'red' : null,
          }}
          onPress={() => navigation.navigate('Cart')}>
          <Text style={{fontSize: 20, padding: 5}}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            padding: 10,
            marginBottom: 10,
            borderRadius: 3,
          }}
          onPress={() => navigation.navigate('UserProfile')}>
          <Text style={{fontSize: 20, padding: 5}}>UserProfile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            padding: 10,
            marginBottom: 10,
            borderRadius: 3,
          }}
          onPress={() => navigation.navigate('Explore')}>
          <Text style={{fontSize: 20, padding: 5}}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            padding: 10,
            borderRadius: 3,
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('OfferScreen')}>
          <Text style={{fontSize: 20, padding: 5}}>OfferScreen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerComponent;
