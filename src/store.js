import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './features/alertSlice'

export default configureStore({
  reducer: {
    alert: alertReducer,
  },
})