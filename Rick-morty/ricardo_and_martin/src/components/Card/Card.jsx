import './estiloCard.css'
import { Link } from 'react-router-dom'
export default function Card({id,name,status,species,gender,origin,image,onClose}) {
    return(
      
      <>
      <div>
          <button type="button" class="btn btn-dark" onClick={() => onClose(id)}>X</button>
       </div>

       <div id='container'>
        <Link to={`/detail/${id}`} >
             <h5>{name}</h5>
        </Link>
             <h5>{status}</h5>
             <h5>{species}</h5>
             <h5>{gender}</h5>
             <h5>{origin}</h5>
             
             <img class='img-card'src={image} alt="" />
             

          </div>
          
          </>
    )
    }