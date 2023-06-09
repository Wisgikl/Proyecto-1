const validation = (userData) =>{
    const errors = {}

    if(!/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(userData.email)){
         errors.email= 'El email ingresado no es valido.🥵'
    }
    if(!userData.email){
        errors.email= 'El nombre del usuario no puede estar vacio.🤬'
    }
    if(userData.email.length > 35){
        errors.email='No puede contener mas de 35 caracteres.🤠'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password='Debe contener al menos un número.🤓'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener un tamaño de 6 a 10 caracteres🥱'
    }

    return errors;
}


export default validation;