import { useState } from "react";
import validation from "../Validations/Validation";
import style from './Form.module.css'
import tt from '../../assets/imagen/tt.jpg'
const Form = ({ login }) =>{
    const [errors, setErrors] = useState({})
    const [userData, setUserData] =useState({
        email:"",
        password:"" 
    })

const handleChange = (event) =>{
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value
    }))
}
const handleSubmit = (event) =>{
    event.preventDefault()
    login(userData)
}

    return(
        <form onSubmit={handleSubmit}>
            <img src={tt} className={style.logo}/>
            <div className={style.form}>
            
            <label className={style.email} htmlFor="email">Email:</label>
            <input  className={style.input}id="input-mail" type="email" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            <hr />
            <label className={style.email2} htmlFor="password">Password:</label>
            <input className={style.password} type="password" name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            <button className={style.submit}>Submit</button>
            </div>
            
            
        </form>
    )
}


export default Form;