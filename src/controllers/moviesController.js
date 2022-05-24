const db = require('../database/models/index');
const {Op} = require('sequelize');
/* const {Movie} = require('../database/models')*/

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()  /* ponerle el nombre del alias */
        .then((movies) => {
            res.render('moviesList', {
                movies
            })
        })
        .catch((error) => res.send(error));
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
            res.render('moviesDetail', {
                movie
            })
        })
        .catch((error) => res.send(error));
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [['release_date', 'DESC']], /* el order hace referencia al order by */
        })
        .then((movies) => {
            res.render('newestMovies', {
                movies
            })
        })
        .catch((error) => res.send(error));
    },
    recomended:(req, res) => {
        db.Movie.findAll({
            order: [['rating', 'DESC']],
            limit: 5,
            /* where: {
                rating: {[Op.gte] : 8},
            } */
        })
        .then((movies) => {
            res.render('recommendedMovies',{
                movies
            })
        })
        .catch((error) => res.send(error));
    }
}