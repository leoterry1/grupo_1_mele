module.exports = (sequelize, dataTypes) => {
    let alias = "Users" 
    let cols = {
        id_user : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey :true
        },
        name : {
            type : dataTypes.STRING(255),
            allowNull : false
        },
        surname : {
            type : dataTypes.STRING(255),
            allowNull : false
        },
        email : {
            type : dataTypes.STRING(255),
            allowNull : false
        },
        password : {
            type : dataTypes.STRING(255),
            allowNull : false
        },
        admin : {
            type : dataTypes.BOOLEAN,
            allowNull : false
        },
        profile: {
            type : dataTypes.STRING(45),
            defaultValue: null
        }    
    }
    

    const config = {
        tableName : "users",
        timestamps : true, 
        underscored: true
    }
    const User = sequelize.define(alias, cols, config)
    User.associate = function(models){
        User.belongsToMany(models.Products,{
            as: 'Product_library',
            through: 'library',
            foreignKey: 'id_user',
            otherKey: 'id_product',
            timestamps: false 
        })
        User.belongsToMany(models.Products,{
            as: 'Products_cart',
            through: 'user_products',
            foreignKey: 'id_user',
            otherKey: 'id_product',
            timestamps: false 
        })
    }
    return User;
}