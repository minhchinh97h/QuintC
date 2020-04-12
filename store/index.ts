import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer, Transform} from 'redux-persist';
import {batchDispatchMiddleware} from 'redux-batched-actions';
import JournalScreenReducer from '../store/reducers/JournalScreenReducer';
import SettingsReducer from '../store/reducers/SettingsReducer';
import ImmerTransform from 'helpers/ImmerTransform';
import {States} from 'types/states/States';

const makePersisted = (
  key: string,
  reducer: any,
  reconciler: any = undefined,
  transforms: Transform<any, any>[] | undefined = [ImmerTransform],
) =>
  persistReducer(
    {
      key,
      storage: AsyncStorage,
      stateReconciler: reconciler,
      transforms,
    },
    reducer,
  );

const rootReducer = combineReducers<States>({
  journalScreen: makePersisted('journalScreen', JournalScreenReducer),
  settings: makePersisted('settings', SettingsReducer),
});

const middleware = applyMiddleware(thunk, batchDispatchMiddleware);

export const reduxStore = createStore(rootReducer, compose(middleware));
export const persistor = persistStore(reduxStore);
