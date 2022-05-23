const db = require('../database/models/index');

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()  /* ponerle el nombre del alias */
        .then((movies) => {
            res.render('moviesList', {
                movies
            })
        })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
            res.render('moviesDetail', {
                movie
            })
        })
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [['release_date', 'ASC']],
        })
        .then((movies) => {
            res.render('newestMovies', {
                movies
            })
        })
    },
    recomended:(req, res) => {
        db.Movie.findAll({
            order: [['release_date', 'DESC']],
            limit: 5,
        })
        .then((movies) => {
            res.render('recommendedMovies',{
                movies
            })
        })
    }
}