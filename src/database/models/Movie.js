module.exports = (sequelize, DataTypes) =>{
    let alias = "Movie"; /* Mismo nombre de archivo */
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaeryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        }

    };
    let config = {
        tableName: "movies", /* se hace por defecto, pero por las dudas lo agregamos */
        createAt: "created_at", /* configurar para q me traiga el dato como le expreso */
        updatedAt: "updated_at",
        deletedAt: false,
        /* timestamps : false, ponemos esto en caso de q no tenga los timestamps*/
    };

    const Movie = sequelize.define(alias, cols, config);
    return Movie;
}

/* sequelize por defecto busca el created_at y updated_at con camellCase 
, no con _ .Al igual que con las FK*/