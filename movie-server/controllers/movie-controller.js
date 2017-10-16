const Movie = require('mongoose').model('Movie');

exports.findAll = (req, res) => {
  Movie.find({}, (err, movies) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(movies);
    }
  });
}

exports.findById = (req, res) => {
  const _id = req.params._id;

  Movie.findOne({ _id }, (err, movie) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(movie);
    }
  });
}