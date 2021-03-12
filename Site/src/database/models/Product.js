module.exports = (sequelize, dataTypes) => {
    let alias = "Products" 
    let cols = {
        id_product : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey :true
        },
        name : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        mark : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        price : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        detail : {
            type : dataTypes.STRING(300),
            allowNull : false
        },
        img : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        id_category: {
            type : dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        },
        id_subcategory: {
            type : dataTypes.INTEGER(10).UNSIGNED,
            defaultValue: null
        }
    }
    

    const config = {
        tableName : "products",
        timestamps : false, 
        underscored: true
    }
    const Product = sequelize.define(alias, cols, config)
    Product.associate = function(models){

        Product.belongsTo(models.Categories,{
            as : 'Category',
            foreignKey : 'id_category'
        })

        Product.belongsTo(models.Subcategories,{
            as : 'SubCategory',
            foreignKey : 'id_subcategory',
        })
        Product.belongsToMany(models.Users,{
            as: 'User_library',
            through: 'library',
            foreignKey: 'id_product',
            otherKey: 'id_user',
            timestamps: false 
        })
        Product.belongsToMany(models.Users,{
            as: 'Users_cart',
            through: 'users_products',
            foreignKey: 'id_product',
            otherKey: 'id_user',
            timestamps: false 
        })
    }
    
}