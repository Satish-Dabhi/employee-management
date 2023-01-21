import { configureStore } from '@reduxjs/toolkit'
import  departmentReducer  from '../reducer/commonReducer'

const store = configureStore({
  reducer: {
    departmentData:departmentReducer,
  },
})

export default store;
