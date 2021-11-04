
import './App.css';
import AddTrip from './components/forms/addtrip/AddTrip';
import AddUser from './components/forms/adduser/AddUser';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <div>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <Link to="/trips">Trips</Link>
    <Switch>
      <Route exact path="/" render={() => <p>Home</p>}/>
      <Route path="/users" component={AddUser}/>
      <Route path="/trips" component={AddTrip}/>
    </Switch>
  </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
