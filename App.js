import React from 'react';
import { StyleSheet, View, StatusBar, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import todoReducer from './src/store/todo/reducers';

export default function App() {
  const reducer = combineReducers({
    todo: todoReducer,
  });
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = applyMiddleware(multi, thunk, promise)(createStore)(
    persistedReducer
  );
  const persistor = persistStore(store);
  return (
    <Provider style={styles.container} store={store}>
      <PersistGate persistor={persistor} />
      <StatusBar backgroundColor="#2f3437" />
      <Routes />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3437',
  },
});
