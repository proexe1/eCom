import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers/Reducers';

// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const store = createStore(CounterReducer);

// const persistConfig = {
//   key: 'root',
//   storage: storage,
// };

// const pReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(pReducer);
// export const persistor = persistStore(store);

export const store = createStore(Reducers, {}, applyMiddleware(thunk));
export default store;
