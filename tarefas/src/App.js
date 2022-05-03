import  Sobre  from './components/Sobre';
import  Home  from './components/Home';
import  Users  from './components/Users';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Desafio tecnico</h1>
      <BrowserRouter>
      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Pagina Inicial</Nav.Link>
        <Nav.Link as={Link} to="/users">Cadastro de usuarios</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
      </Nav>
      <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/users"  element={<Users/>}></Route>
        <Route path="/sobre"  element={<Sobre/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
