
const UserModel = (sequelize) =>{
    sequelize.define("UserModel",{
        id:{
            dataType: integer,
            allowNull: false,
            primaryKey: true
        },
        email:{
            dataType: string,
            allowNull: false,
            isEmail: true
        },
        password:{
            dataType: string,
            allowNull: false
        }
    })
}


module.exports=UserModel;