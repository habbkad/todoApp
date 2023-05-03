import storage from 'redux-persist/lib/storage';
import {PersistConfig, persistReducer} from 'redux-persist';
import {RootState} from './reducers';
import {combineReducers} from 'redux';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
