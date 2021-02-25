const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
  Movie.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
     },
    runtime: {
      type: Sequelize.INTEGER
     },
    releaseDate: {
      type: Sequelize.INTEGER
     },
    isAvailableOnVhs: {
      type: Sequelize.BOOLEAN
     },
  }, { sequelize });

  return Movie;
};
