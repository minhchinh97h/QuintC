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
import i18next from 'i18next';
import translationEN from 'locales/en.json';
import translationVN from 'locales/vn.json';
import {enableMapSet} from 'immer';

enableMapSet();

i18next.init(
  {
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: {
        translation: translationEN,
      },
      vn: {
        translation: translationVN,
      },
    },
  },
  (err, t) => {
    if (err) return console.log('something went wrong loading', err);
  },
);

console.disableYellowBox = true;
const Index = () => (
  <Provider store={reduxStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Index);
