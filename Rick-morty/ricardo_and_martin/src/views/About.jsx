import batman from '../../src/assets/imagen/BATMAN.jpg'

const About = () =>{
    return(
        <>
        <div class="card" styles="width: 18rem;">
  <div class="card-body">
  <img src={batman} height={'400px'} style={{maxWidth: '300px'}} class="card-img-top" alt="..."/>
    <h5 class="card-title">El creador de este magnifico proyecto</h5>
    <p class="card-text">Y yo soy un pibe de barrio, que la remo de abajo para estar donde estoy</p>
    <a href="https://www.instagram.com/joacowisgikl/" class="btn btn-primary">Mi ig</a>
  </div>
</div>
        
            
        </>
       
    )
}






export default About;