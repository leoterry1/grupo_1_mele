module.exports = (sequelize, dataTypes) => {
    let alias = "Categories" 
    let cols = {
        id_category : {
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
        tableName : "category",
        timestamps : false, 
        underscored: true
    }
    const Category = sequelize.define(alias, cols, config)
    Category.associate = function(models){

        Category.hasMany(models.Products,{
            as : 'Category',
            foreignKey : 'id_category'
        })
    }
    
}