import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer, Transform} from 'redux-persist';
import {batchDispatchMiddleware} from 'redux-batched-actions';
import immutableTransform from 'redux-persist-transform-immutable';
import JournalScreenState from '../store/reducers/JournalScreenReducer';
const makePersisted = (
  key: string,
  reducer: any,
  reconciler: any = undefined,
  transforms: Transform<any, any>[] | undefined = [immutableTransform()],
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

const rootReducer = combineReducers({
  journalScreenState: makePersisted('journalScreenState', JournalScreenState),
});

const middleware = applyMiddleware(thunk, batchDispatchMiddleware);

export const reduxStore = createStore(rootReducer, compose(middleware));
export const persistor = persistStore(reduxStore);
