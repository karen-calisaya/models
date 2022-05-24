module.exports = (sequelize, dataTypes) =>{
    let alias = "Actor";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        }
    };
    let config = {
        tableName: 'actors',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
    };

    const Actor = sequelize.define(alias, cols, config);
    return Actor;
}