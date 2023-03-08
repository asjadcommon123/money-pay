import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  // FLUSH,
  // PAUSE,
  // PERSIST,
  persistReducer,
  persistStore,
} from 'redux-persist';
import authSliceReducer from '../src/redux/authSlice';
import dashboardReducer from '../src/redux/DashboardSlice';
import { injectStore } from './apiInstance';

// import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSliceReducer,
  dashboard: dashboardReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
injectStore(store);
export const persistor = persistStore(store);
export default store;
