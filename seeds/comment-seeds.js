const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentdata = [
     {
         content: 'Wow this is great',
         user_id: 4,
         post_id: 1
     },
    
     {
         content: 'This sucks',
         user_id: 2,
         post_id: 1
     },
 ]
    

const seedComment = () => Comment.bulkCreate(commentdata, {individualHooks: true});

module.exports = seedComment;