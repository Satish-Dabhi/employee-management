import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../component/DataTable";
import MyDailog from "../component/MyDialog";
import MyForm from "../component/MyForm";
import { schema, uiSchema } from "../formDefination/Department";
import { createDepartment, getDepartments } from "../services/commonApi";

export default function Department() {
  const [open, setOpen] = React.useState(false);
  const [departmentData, setDepartmentData] = React.useState([]);
  const [updateDepartmentData, setUpdateDepartmentData] = React.useState({});
  const dispatch = useDispatch();
  const { departmentsData } = useSelector((store) => store.departmentData);
  console.log("getDepartments--------", departmentsData);
  useEffect(() => {
    dispatch(getDepartments());
  }, []);

  useEffect(() => {
    console.log("getDepartments", departmentsData);
    setDepartmentData(departmentsData);
  }, [departmentsData]);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const onSubmit = ({ formData }, e) => {
    setOpen(!open);
    console.log("Data submitted: ", formData);
    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:3001/createDepartment", data)
      .then((response) => response.json())
      .then((data) => {
        dispatch(createDepartment(data));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateData = (newdata) => {
    console.log("update user index", newdata);
    setUpdateDepartmentData({
      managerName: newdata.managerName,
      name: newdata.name,
    });
    setOpen(!open);
  };

  const onUpdate = ({ formData }, e) => {
    setOpen(!open);
    console.log("updated Data submitted: ", formData);
    const data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData }),
    };

    fetch("http://localhost:3001/find-department-by-id", data)
      .then((data) => {
        dispatch(getDepartments());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const form = (
    <MyForm
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
      onUpdate={onUpdate}
      formData={updateDepartmentData}
    ></MyForm>
  );

  return (
    <>
      <MyDailog
        open={open}
        data={form}
        title={"Add Department"}
        onClose={handleClickOpen}
      />
      <Box sx={{ width: "100%" }}>
        <center>
          <Typography variant="h3" component="div" gutterBottom>
            -: <u>Departments</u> :-
          </Typography>
        </center>
      </Box>
      <Grid>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Department
        </Button>
      </Grid>
      {departmentData.length > 0 && (
        <DataTable data={departmentData} updateData={updateData} />
      )}
    </>
  );
}
