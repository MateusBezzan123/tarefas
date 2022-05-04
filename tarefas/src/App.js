import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  AxiosUsers  from "./components/Users/AxiosUsers"
import Home from "./components/Home/Home"
import { Nav } from "react-bootstrap";
import {BrowserRouter, Link, Switch,Route} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <h3>Jsonplaceholder Teste Tecnico</h3>
      <br />
      <BrowserRouter>
        <Nav variant="tabs">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/users'>Cadastros de Usuarios</Nav.Link>
        </Nav>
        <Switch>
          <Route path='/' exact='true' component={Home}></Route>
          <Route path='/users' exact='true' component={AxiosUsers}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
