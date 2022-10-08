const Sequelize = require('sequelize');
const sequelizeConnection = require('../config/connection');

const Post = sequelizeConnection.define('post', {

    // timestamp: if set to true, everytime a new user is created that user will have a timestamp of when that data was created
    // freezetablename = true means table name doesn't change depending on whether it should be plural or not
    // underscored: if sequelize has to reformat data it uses underscores (double check this)

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

// fk = kind of like a primary key for a different table

user_id: {
    trpe: Sequelize.INTEGER,
    allowNull: false,
    reference: {
        model: 'User',
        key: 'id'
    }
}

}, {
    sequelize: sequelizeConnection,
    timestamps: true,
    freezeTableName: true,
    modelName: 'posts',
    underscored:true
});


module.exports = Post; 