'use strict';

const userModel = require('./users');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;


const sequelize = new Sequelize('authlab08', 'dimaalabsi', 'yaubuntu8#', {
  host: 'localhost',
  dialect: "postgres"
});
// const sequelize = new Sequelize(DATABASE_URL);

const clothesModel = require('./clothes/model');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection');

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
}


