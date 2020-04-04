/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {persistor, reduxStore} from './store/index';


console.disableYellowBox = true
const Index = () => (
  <Provider store={reduxStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Index);
