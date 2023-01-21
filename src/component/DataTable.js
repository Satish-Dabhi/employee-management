import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../App.css'
import Button from '@mui/material/Button';

const columns = ['Index', 'Manager_Name', 'Department_Name'];

export default function DataTable(props) {
  const rows = props.data;
 const updateData = props.updateData;

  const deleteData = (index) =>{
    console.log("delete user index",index);
      }
  return (
    <div className='table-grid' style={{ height: 400, width: '100%' }}>
      <Table>
      <Thead>
        <Tr>
       { columns.map((item,index) => {
         return <Th>{item}</Th>
       })}
        </Tr>
      </Thead>
      <Tbody>
      { rows.map((item,index) => {
        return (<Tr className='table-row'>
        <Td>{index}</Td>
        <Td>{item.managerName}</Td>
        <Td>{item.name}</Td>
        <Td><Button variant="contained" onClick={()=>updateData(item)}>Update</Button></Td>
        <Td><Button variant="contained">Delete</Button></Td>
      </Tr>)
       })}
      </Tbody>
    </Table>
    </div>
  );
}
