import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User/model/slice/userSlice';
import { loginReducer } from 'features/AuthByUserName';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
