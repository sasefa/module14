const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/db.js');

class Post extends Model {}

Post.init({
  // Attributes
}, {
  sequelize,
  modelName: 'post'
});

module.exports = Post;
