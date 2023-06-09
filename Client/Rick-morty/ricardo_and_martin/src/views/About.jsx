import batman from '../../src/assets/imagen/Elmascapo2.jpg'
import style from '../views/About.module.css'
const About = () =>{
    return(
        <>
        <div className={style.contenedor}>
  <div class="card-body">
  <img className={style.imagen} src={batman}  alt="..."/>
    <h3 class="card-title">El creador de este magnifico proyecto</h3>
   
    <a className={style.insta}href="https://www.instagram.com/joacowisgikl/" >Mi instagram</a>
  </div>
</div>
        
            
        </>
       
    )
}






export default About;