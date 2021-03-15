module.exports = (sequelize, dataTypes) => {
    let alias = "User_products" 
    let cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey :true
        },
        id_user : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        id_product : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        quantity : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }
    

    const config = {
        tableName : "users_products",
        timestamps : false, 
        underscored: true
    }
    const User_product = sequelize.define(alias, cols, config)
    User_product.associate = function(models){

        User_product.belongsTo(models.Users,{
            as : 'User',
            foreignKey : 'id_user'
        })

        User_product.belongsTo(models.Products,{
            as : 'Product',
            foreignKey : 'id_product',
        })
    }
    return User_product
}