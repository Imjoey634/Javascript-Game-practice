'use strict';
const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = (sequelize) => {
  class Article extends Sequelize.model {
    publishedAt() {
      const date = moment(this.createdAt).format("MMMM D, YYYY, h:mma");
      return date;
    }
    shortDescription() {
      const shortDesc = this.body.length > 200 ? this.body.substring(0, 200) + "..." : this.body;
      return shortDesc;
    }
  }

module.exports = (sequelize) => {
  class Article extends Sequelize.Model {}
  Article.init({
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    body: Sequelize.TEXT
  }, { sequelize });

  return Article;
}};
