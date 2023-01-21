import { createSlice } from '@reduxjs/toolkit'
import { getDepartments, createDepartment } from '../services/commonApi'

const initialState = {
  departmentsData: [],
  getDepartmentsLoader: false,

  createDepartmentData: [],
  createDepartmentDataLoader: false,

}

const departmentSlice = createSlice({
  name: 'departments',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getDepartments.pending]: (state) => {
      state.getDepartmentsLoader = true;
    },
    [getDepartments.fulfilled]: (state, { payload }) => {
      state.getDepartmentsLoader = false;
      console.log("departmentsData",payload);
      state.departmentsData = payload;
    },
    [getDepartments.rejected]: (state) => {
      state.getDepartmentsLoader = false;
    },

    [createDepartment.pending]: (state) => {
      state.createDepartmentDataLoader = true;
    },
    [createDepartment.fulfilled]: (state, { payload }) => {
      state.createDepartmentDataLoader = false;
      console.log("createDepartmentData",payload);
      state.createDepartmentData = payload;
    },
    [createDepartment.rejected]: (state) => {
      state.createDepartmentDataLoader = false;
    },


  },
})

export default departmentSlice.reducer; 