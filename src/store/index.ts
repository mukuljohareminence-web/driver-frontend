import {
  configureStore,
  combineReducers,
  type Tuple,
  type ThunkMiddleware,
  type UnknownAction,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import exampleReducer, { type ExampleState } from './slices/exampleSlice';
import userReducer, { type UserState } from './slices/userSlice';
import type { PersistPartial } from 'redux-persist/es/persistReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['example', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (
    getDefaultMiddleware,
  ): Tuple<
    [
      ThunkMiddleware<
        {
          example: ExampleState;
          user: UserState;
        } & PersistPartial,
        UnknownAction
      >,
    ]
  > =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
