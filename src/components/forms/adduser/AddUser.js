
import React from "react";
import UserTable from "./usertable/UserTable";
import userService from "../../../services/users";
import tripService from "../../../services/trips";
import {useRef} from 'react';
import UsersTrips from "./usertable/UsersTrips";
import { Stack } from '@mui/material';
import Button from "@mui/material/Button";

export default function AddUser() {

    const gridRef = useRef();
    const tgridRef = useRef();
    const [users, setUsers] = React.useState([]);
    const [trips, setTrips] = React.useState([]);


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
  
    const getUsers = () => {
      userService
      .getAll()
      .then(data => {
          setUsers(data);
          console.log('haetaan getAll()')
          console.log(data);}
          )
      .catch(err => console.error('Virhe: ' +err))
  }

  React.useEffect(() => {
      getUsers();
      getTrips();
  }, [])

const addUserToTrip = () => {
    tripService
    .personToTrip(trips[tgridRef.current.getSelectedNodes()[0].childIndex].id,
    users[gridRef.current.getSelectedNodes()[0].childIndex].id)
    .then(data => {
        console.log(data);
        getTrips();
        getUsers();
    })
    .catch(err => console.error(err));
}
  
return(
<div>
   
    <Button size="small" variant="outlined" onClick={() => addUserToTrip()}>lisää käyttäjä matkaan</Button>
    <Stack direction="row" justifyContent="center">
    <UserTable users={users} gridRef={gridRef}/>
    <UsersTrips gridRef={tgridRef} trips={trips}/>
    </Stack>
</div>
)
}