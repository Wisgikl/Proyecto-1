import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import About from './views/About';
import Detail from './views/Detail';


const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "9b0944d4bcd3.117a564457166f964230";

function App() {
  

  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          alert('¡No hay personajes con este ID!');
       }
    });
 }

  const onClose = (id) =>{
    const charactersFiltered = characters.filter(character => 
      character.id !== (id))
    setCharacters(charactersFiltered)
  }


  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
         
    </div>
  );
}

export default App;
