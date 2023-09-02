import {
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { rtkApi } from 'shared/api/rtkApi';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialStore?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialStore,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
  });
  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
