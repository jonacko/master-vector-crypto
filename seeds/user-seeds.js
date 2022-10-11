const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'jess',
    email: 'jess@email.com',
    password: 'password123'
  },
  {
    username: 'sam',
    email: 'sam@email.com',
    password: 'password123'
  },
  {
    username: 'ben',
    email: 'ben@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;