import style from './Card.module.css'
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'


 function Card({id,name,species,gender,image,onClose,addFav,removeFav,myFavorites}) {

     const [isFav, setIsFav] = useState(false)

     const handleFavorite = () =>{
          if(isFav === true){
               setIsFav (false)
               removeFav(id)
          }
          if(isFav === false){
               setIsFav(true)
               addFav({id,name,species,gender,image})
          }
     }

     useEffect(() => {
          myFavorites.forEach((fav) => {
             if (fav.id === id) {
                setIsFav(true);
             }
          });
       }, [myFavorites]);
    return(
      
      <>

       <div className={style.Contenedor}>
          <div>
          <button className={style.like} onClick={handleFavorite}>{isFav? '❤️' : '🤍'}</button>
          </div>
       
       <img className={style.img} class='img-card'src={image} alt="" />

        <Link  className={style.subrayado} to={`/detail/${id}`} >
             <h5>Name: {name}</h5>
        </Link>
               
             <h5>Species: {species}</h5>
             <h5>Gender: {gender}</h5>
             

             <button className={style.cerrar}type="button" onClick={() => onClose(id)}>X</button>
            
             
             
             

          </div>
          
          </>
    )
    }

const mapStateToProps = (state) =>{
     return{
          myFavorites: state.myFavorites
     }
}

const mapDispatchToProps = (dispatch) =>{
     return{
          addFav: (character) => {dispatch(addFav(character))},
          removeFav: (id) =>{dispatch(removeFav(id))}
     }
}

export default connect(
     mapStateToProps,
     mapDispatchToProps
)(Card);
