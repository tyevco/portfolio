import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import resumeReducer from '../features/resume/resumeSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    resume: resumeReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;