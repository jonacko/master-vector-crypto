const sequelize = require('../config/connection');
const { Post } = require('../models');

const postdata = [ {
 title: 'halloween keyboard review',
  content: 'very ghosty',
 user_id: 2
    },
    
    {
        title: 'databases are hard',
        content: 'sooooooooo hard',
        user_id: 1
    },
    
    {
        title: 'I am hungry',
        content: 'got any food?',
        user_id: 4
            
    }
]

const seedPost = () => Post.bulkCreate(postdata, {individualHooks: true});

module.exports = seedPost;