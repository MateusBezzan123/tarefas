import  Sobre  from './components/Sobre';
import  Home  from './components/Home';
import  Users  from './components/Users';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Desafio tecnico</h1>
      <BrowserRouter>
      <ul>
        <li> <Link to="/">Pagina Inicial</Link> </li>
        <li><Link to="/users">Cadastro de usuarios</Link></li> 
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
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
