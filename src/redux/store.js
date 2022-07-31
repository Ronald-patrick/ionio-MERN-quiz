import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer'
export default configureStore({
  reducer: authReducer,
})