import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../constant/constant";

const origin = 'http://localhost:3001'

export const getDepartments = createAsyncThunk(
    'departments/getDepartments',
  async () => {
    console.log("getDepartments called");
        const url = `${origin}${api.getDepartments}`;
      const res = await fetch(url).then(
      (data) => data.json()
    )
    return res;
  });

export const createDepartment = createAsyncThunk(
  'departments/createDepartments',
  async (reqBody) => {
    console.log("createDepartments called", reqBody);
    const url = `${origin}${api.createDepartment}`;
    const res = await fetch(url, reqBody).then(
      (data) => data.json()
    )
    return res;
  });