import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  LogBox,
  TextInput,
  Platform,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
// import {store} from './src/Redux/Store';
import StackNavigation from './src/Navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen';
import store, {persistor} from './src/Redux/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;

  LogBox.ignoreAllLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
