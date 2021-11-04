import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/trips'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data);
  }
  
  const create = newObject => {
    const request = axios.post(baseUrl, newObject);
    console.log('newObject on');
    console.log(newObject);
    return request.then(response => console.log(response.data));
  }
  
  const personToTrip = (tripId, userId) => {
    const request = axios.put(`http://localhost:8080/api/${tripId}/users/${userId}`);
    console.log(request.then(response => response.data));
    return request.then(response => response.data);
  }

  const deletePFromTrip = (tripId, userId) => {
    const request = axios.put(`http://localhost:8080/api/${tripId}/users/remove/${userId}`);
    console.log(request.then(response => response.data));
    return request.then(response => response.data);
  }

  const getTripsUsers = (tripId) => {
    const request = axios.get(`http://localhost:8080/api/trips/${tripId}`);
    console.log(request.then(response => response.data));
    return request.then(response => response.data.reservatedUsers);
  }

  const deleteTrip = id =>  {
    console.log(`${baseUrl}/${id}`)
    const request = axios.delete(`${baseUrl}/${id}`);
    console.log(request.then(response => response.data));
    return request.then(response => response.data);
  }
  
  const modify = newObject => {
    const request = axios.put(`${baseUrl}/${newObject.id}`, newObject);
    return request.then(response => response.data);
  }
  
  export default {getAll, create, deleteTrip, modify, personToTrip, deletePFromTrip, getTripsUsers}