module.exports = (sequelize, DataTypes) =>{
    let alias = "genre";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        active: {
            type: dataTypes.BOOLEAN, /* ojo */
            allowNull: false,
        }
    };
    let config = {
        tableName: "genres",
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
    };

    const Genre = sequelize.defined(alias, cols, config);
    return Genre;

}

