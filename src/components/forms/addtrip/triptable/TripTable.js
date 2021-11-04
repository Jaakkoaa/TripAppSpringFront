
import React from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';



export default function TripTable(props) {


    const columns = [
        {field: 'name', filter: true},
        {field: 'date'},
       
      ]


   
    return(
        <div className="ag-theme-material" style={{height: 400, width: 600}}>
        <AgGridReact
          rowData={props.trips}
          onGridReady={ params => props.gridRef.current = params.api }
          ref={props.gridRef}
           rowSelection="single"
          columnDefs={columns}>
          </AgGridReact>
           </div>
              
      )
  
   
    }