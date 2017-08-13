'use strict'

const {DATE} = require('sequelize')

module.exports = db => db.define('history', {
  date: {
    type: DATE,
    validate:{
      notNull: true
    }
  }
})
