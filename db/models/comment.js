'use strict'

const {STRING, DATE, TEXT, INTEGER} = require('sequelize')

module.exports = db => db.define('comments', {
  text: {
    type: TEXT,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  date: {
    type: DATE,
    validate:{
      notNull: true
    }
  },
  rating: {
    type: INTEGER
  },
  // parentId: {
  //   type: INTEGER,
  //   unique: true
  // },
  place: {
    type: INTEGER,
    validate:{
      notNull: true
    }
  }
})

module.exports.associations = (Comment, {User, Article, Topic}) => {
  Comment.belongsTo(User)
  Comment.belongsTo(Article)
  Comment.belongsTo(Topic)
  Comment.belongsTo(Comment, {as:'parent'})
}
