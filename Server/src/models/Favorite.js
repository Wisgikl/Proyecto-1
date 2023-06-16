



const FavoriteModel = (sequelize) =>{
    sequelize.define("FavoriteModel",{
        id:{
            dataType: integer,
            allowNull: false,
            primaryKey: true
        },
        name:{
            dataType: string,
            allowNull: false,
        },
        status:{
            dataType: Enum (Alive - Dead - unknown),
            allowNull: false
        },
        species:{
            dataType: string,
            allowNull: false
        },
        gender:{
            dataType: Enum (Female - Male - Genderless - unknown),
            allowNull: false
        },
        origin:{
            dataType: string,
            allowNull: false
        },
        image:{
            dataType: string,
            allowNull: false
        }
    })
}


module.exports=FavoriteModel;