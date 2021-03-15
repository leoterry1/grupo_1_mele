module.exports = (sequelize, dataTypes) => {
    let alias = "Subcategories" 
    let cols = {
        id_subcategory : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey :true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false
        }
    }
    

    const config = {
        tableName : "Subcategory",
        timestamps : false, 
        underscored: true
    }
    const Subcategory = sequelize.define(alias, cols, config)
    Subcategory.associate = function(models){

        Subcategory.hasMany(models.Products,{
            as : 'Products',
            foreignKey : 'id_subcategory'
        })
    }
    return Subcategory;
}