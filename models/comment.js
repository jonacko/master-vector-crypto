// Every post has a comment, and every comment has an associated user 

const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/connection');

const Comment = sequelizeConnection.define('comment', {

id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

},

//text is unlimited - better than string in this instance (for blog post)

content: {
    type: Sequelize.TEXT,
    allowNull: false

},

post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    reference: {
        model: 'Post',
        key: 'id'
    }
},

// user_id stays because if a user comments on a post they didn't make, post still has original associated user id and commentor id

user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    reference: {
        model: 'User',
        key: 'id'
    }
}

// Timestamps - adds time created column

}, {
    sequelize: sequelizeConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comments',
    underscored:true
});


module.exports = Comment; 