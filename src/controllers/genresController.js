const db = require('../database/models/index.js');

module.exports = {
    list: (req, res) => {
        db.Genre.findAll()
        /* console.log(generos)  es para ver q viene en db.Genre*/
        .then((genres) => {
        /* res.send(genres) */
            res.render('genresList', {
                genres
            })
        })
        .catch((error) => res.send(error));
        /* para capturar el error, tiene que ver con el error en la promesa*/
        /* la promesa salio, pero no esta conectada a la base de datos,
         entonces eso se captura en el catch */
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
        .then((genre) => {
            res.render('genresDetail', {
                genre
            })
        })
        .catch((error) => res.send(error));
    }
        /* el findOne es para usarlo con el where
        si queremos obtener un registro exacto no conviene usar findByPk.
        Igual se puede usar el primero, pero es mejor usar el findByPk */
}