import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const DataTable = ({ users }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'sex', headerName: 'Sex', width: 100 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
    { field: 'govtIdType', headerName: 'Govt Issued ID Type', width: 200 },
    { field: 'govtId', headerName: 'Govt Issued ID', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'state', headerName: 'State', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'country', headerName: 'Country', width: 150 },
    { field: 'pincode', headerName: 'Pincode', width: 120 },
  ];

  return (
    <div style={{ height: 400, width: '100%', marginTop: 20, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick  // Remove checkbox selection
        style={{ border: '1px solid #ddd' }}
        
      />
    </div>
  );
};

export default DataTable;
