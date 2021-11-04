import React from "react";
import tripService from "../../../../services/trips";
import {AgGridReact} from 'ag-grid-react';

export default function TripsUsers(props) {


    const columns = [
        {field: 'username', filter: true},
        
      ]


   
    return(
        <div className="ag-theme-material" style={{height: 400, width: 600}}>
         <AgGridReact
          rowData={props.users}
          onGridReady={ params => props.gridRef.current = params.api }
          ref={props.gridRef}
           rowSelection="single"
          columnDefs={columns}>
          </AgGridReact>
           </div>
              
      )
  


}