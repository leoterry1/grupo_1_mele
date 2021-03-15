module.exports = (sequelize, dataTypes) => {
    let alias = "Libraries" 
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
        },
        date : {
            type : dataTypes.DATE,
            allowNull : true
        }
    }
    

    const config = {
        tableName : "library",
        timestamps : false, 
        underscored: true
    }
    const Library = sequelize.define(alias, cols, config)
    Library.associate = function(models){

        Library.belongsTo(models.Users,{
            as : 'User',
            foreignKey : 'id_user'
        })

        Library.belongsTo(models.Products,{
            as : 'Product',
            foreignKey : 'id_product',
        })
    }
    return Library;
}