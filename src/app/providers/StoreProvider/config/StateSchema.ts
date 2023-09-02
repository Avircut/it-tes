import { AxiosInstance } from 'axios';
import { rtkApi } from 'shared/api/rtkApi';
import { AppDispatch } from './store';

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch: AppDispatch;
  state: StateSchema;
}
