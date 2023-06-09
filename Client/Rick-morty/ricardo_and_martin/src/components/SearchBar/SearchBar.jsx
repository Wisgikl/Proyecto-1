import './estiloSearch.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

    const [id, setId] = useState("")

    const handleChange = (event) =>{
        setId(event.target.value)
    }

    return(
        <div class="input-group mb-3">

        <input type="text" onChange={handleChange} value={id} class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button class="boton-search" type="button" id="button-addon2" onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
     
    );
 }

 