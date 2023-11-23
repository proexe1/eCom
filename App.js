import React, {Component, useEffect} from 'react';
import {Text, StyleSheet, LogBox, TextInput, Platform} from 'react-native';
import {Provider} from 'react-redux';
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
