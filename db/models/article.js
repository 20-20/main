'use strict'

const {STRING, DATE, INTEGER} = require('sequelize')

module.exports = db => db.define('articles', {
  url: {
    type: STRING,
    validate: {
      isUrl: true,
      notNull: true,
      notEmpty: true
    }
  },
  author: STRING,
  date: {
    type: DATE,
    validate:{
      notNull: true
    }
  },
  publication: STRING,
  rating: INTEGER
})

module.exports.associations = (Article, {Comment, Topic, User, History}) => {
  Article.hasMany(Comment)
  Article.belongsTo(Topic)
  Article.belongsToMany(User, {through: History})
}
