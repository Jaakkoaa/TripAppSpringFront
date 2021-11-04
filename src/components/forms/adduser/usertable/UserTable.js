
import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'


export default function UserTable(props) {



const columns = [
    {field: 'username', filter: true},
   
  ]



return(
    <div className="ag-theme-material" style={{height: 400, width: 600}}>
    
    <AgGridReact
     onGridReady={ params => props.gridRef.current = params.api }
     ref={props.gridRef}
      rowData={props.users}
      rowSelection="single"
      columnDefs={columns}>
      </AgGridReact>
       
       
       </div>
          
  )


}