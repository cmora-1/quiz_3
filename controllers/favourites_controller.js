var models = require('../models/models.js');

// MW que muestra los favoritos por usuario
exports.show = function(req, res, next) {

  models.User.findAll({ where: { id: Number(req.user.id)},
                        include: [{ model: models.Quiz}] }).then(
    function(quizes) {
      console.log("FAVORITOS encontrados = ", quizes.length);
      res.render('quizes/index.ejs', {quizes: quizes, errors: []});
    }
  ).catch(function(error){next(error)});
};


// PUT /user/:userid/favourites/:quizid
exports.marcar = function(req, res, next) {
  console.log("Marcando como favorito", req.user.id, req.quiz.id);
  res.redirect('/quizes?fav=2');
/*
  models.User.addQuiz(req.quiz.id, { asignado: true }).then(
    function() {
      console.log("Added");
    }
  ).catch(function(error){next(error)}); */
};

// DELETE /quizes/:id
exports.quitar = function(req, res, next) {
  console.log("Quitando de favorito", req.user.id, req.quiz.id);
  res.redirect('/quizes?fav=1');
  /*
  req.quiz.destroy().then( function() {
    res.redirect('/quizes');
  }).catch(function(error){next(error)}); */
};
