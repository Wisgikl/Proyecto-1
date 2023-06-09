import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Favoritos from './components/Favoritos/Favoritos'
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About';
import Detail from './views/Detail';
import style from './App.module.css'

const email = 'joacowisgikl@gmail.com'
const password = 'joaco123'

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const API_KEY = "9b0944d4bcd3.117a564457166f964230";

function App() {
  const location = useLocation()
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([])
  const [access, setAccess]=useState(false)

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
    
 }

 useEffect(() => {
  !access && navigate('/');
},[access])



async function onSearch(id) {
  try {
    const { data } = await axios(
      `http://localhost:3001/rickandmorty/character/${id}`
    );

    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    } else {
      alert("¡No hay personajes con este ID!");
    }
  } catch (error) {
    console.log(error);
  }
}


  const onClose = (id) =>{
    const charactersFiltered = characters.filter(character => 
      character.id !== (id))
    setCharacters(charactersFiltered)
  }


  return (
    <div className={style.App}>
      {
        location.pathname !== '/' && <Nav onSearch={onSearch}/>

      }
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route className={style.about} path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/favoritos' element={<Favoritos/>}/>
      </Routes>
         
    </div>
  );
}

export default App;
