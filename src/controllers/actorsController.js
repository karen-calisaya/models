const db = require('../database/models/index');

module.exports = {
    list: (req, res) => {
        db.Actor.findAll()
        .then((actors) => {
            res.render('actorsList', {
                actors
            })
        })
        .catch((error) => res.send(error))
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id)
        .then((actor) => {
            res.render('actorsDetail', {
                actor
            })
        })
        .catch((error) => res.send(error));
    }

}