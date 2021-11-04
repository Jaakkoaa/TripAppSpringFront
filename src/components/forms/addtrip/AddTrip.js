
import React from "react";
import TripTable from "./triptable/TripTable";
import TripsUsers from "./tripsPersons/TripsUsers";
import tripService from "../../../services/trips";
import {useRef} from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

export default function AddTrip() {

    const gridRef = useRef();
    const ugridRef = useRef();

    const [desc, setDesc] = React.useState({
        date:'',
        name:''
    });
       
    const [trips, setTrips] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    const getUsers = () => {
        if (gridRef.current.getSelectedNodes().length> 0) {
        tripService
        .getTripsUsers(trips[gridRef.current.getSelectedNodes()[0].childIndex].id)
        .then(data => {
            setUsers(data);
            console.log('haetaan matkan käyttäjät')
            console.log(data);}
            )
        .catch(err => console.error('Virhe: ' +err))
    }else {
        alert('nyyppä');
    }
  
    }
  

    const getTrips = () => {
      tripService
      .getAll()
      .then(data => {
          setTrips(data);
          console.log('haetaan getAll()')
          console.log(data);}
          )
      .catch(err => console.error('Virhe: ' +err))
  }

  React.useEffect(() => {
      getTrips();
  }, [])

    const postTrip = (event) => {
    event.preventDefault();
    tripService
    .create(desc)
    .then(data => console.log( data + getTrips()))
    .catch(err => console.error(err));
    
}
    const deleteTrip = () => {
    console.log('deleting a trip');
    if (gridRef.current.getSelectedNodes().length> 0) {
    tripService
    .deleteTrip(trips[gridRef.current.getSelectedNodes()[0].childIndex].id)
    .then(data => console.log(setTrips(data)))
    .catch(err => console.error(err));
    }else {
          alert('nyyppä');
      }
    
  }

  const deleteUserFromTrip = () => {
      tripService
      .deletePFromTrip(trips[gridRef.current.getSelectedNodes()[0].childIndex].id,
      users[ugridRef.current.getSelectedNodes()[0].childIndex].id)
      .then(data => {
          console.log(data);
          getTrips();
          getUsers();
      })
      .catch(err => console.error(err));
  }
  
return(
<div>
    <p>lisää matka</p>
    <Stack direction="row" justifyContent="center" spacing={2} margin={2}>
    <form onSubmit={(event) => postTrip(event)}>
    <TextField value={desc.name} onChange={e => setDesc({...desc, name: e.target.value})} />
    <TextField value={desc.date} onChange={e => setDesc({...desc, date: e.target.value})} />
    <Button size="small" variant="outlined" type="submit" >lisää matka</Button>
    </form>
    <Button size="small" endIcon={<DeleteIcon/>} variant="outlined" onClick={() => deleteTrip()} >poista matka</Button>
    <Button size="small" variant="outlined" onClick={() => getUsers()} >matkan käyttäjät</Button>
    <Button size="small" variant="outlined" onClick={() => deleteUserFromTrip()} >posta käyttäjä matkasta</Button>
    </Stack>
    <Stack direction="row" justifyContent="center">
    <TripTable trips={trips} gridRef={gridRef}/>
    <TripsUsers users={users} gridRef={ugridRef}/>
    </Stack>
</div>
)
}

