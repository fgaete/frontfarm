//import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import UserEdit from './UserEdit';
import UserAdd from './UserAdd';
import GameList from './GameList';
import GameAdd from './GameAdd';
import GameEdit from './GameEdit';
import ConsoleAdd from './ConsoleAdd';
import ConsoleEdit from './ConsoleEdit';
import ConsoleList from './ConsoleList';
import ConsoleDelete from './ConsoleDelete';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Sistema de Colección Geek</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/users" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Usuarios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a className="dropdown-item" href="/users">Listar Usuarios</a></li>
                <li><a className="dropdown-item" href="/adduser">Agregar Usuario</a></li>
                <li><a className="dropdown-item" href="/edituser">Editar Usuario</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/games" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Juegos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a className="dropdown-item" href="/games">Listar Juegos</a></li>
                <li><a className="dropdown-item" href="/addgame">Agregar Juego</a></li>
                <li><a className="dropdown-item" href="/editgame">Editar Juego</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/consolas" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Consolas
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a className="dropdown-item" href="/consolas">Listar Consolas</a></li>
                <li><a className="dropdown-item" href="/addconsole">Agregar Consola</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        <BrowserRouter> 
          <Routes>
            <Route path='/users' element={<UserList/>} exact></Route>
            <Route path='/adduser' element={<UserAdd/>} exact></Route>
            <Route path='/edituser' element={<UserEdit/>} exact></Route>
            <Route path='/games' element={<GameList/>} exact></Route>
            <Route path='/addgame' element={<GameAdd/>} exact></Route>
            <Route path='/editgame' element={<GameEdit/>} exact></Route>
            <Route path='/consolas' element={<ConsoleList/>} exact></Route>
            <Route path='/addconsole' element={<ConsoleAdd/>} exact></Route>
            <Route path='/editconsole/:consoleid' element={<ConsoleEdit/>} exact></Route>
            <Route path='/deleteconsole/:consoleid' element={<ConsoleDelete/>} exact></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
