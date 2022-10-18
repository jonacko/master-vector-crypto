const Sequelize = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {

    // timestamp: if set to true, everytime a new user is created that user will have a timestamp of when that data was created
    // freezetablename = true means table name doesn't change depending on whether it should be plural or not
    // underscored: if sequelize has to reformat data it uses underscores (double check this)

id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

},

username: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [5],
    }
},

password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [5, 50]
    }
}


}, {
    sequelize: sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'users',
    underscored:true
});

// Hooks - intercepts any changes made before or after a modification to the table
// beforecreate - a method you can call on user that takes a callback function that will be called whenever we are creating or writing some new data to this user model; whatever object we pass is going to be intercepted with beforeCreate and passed to the callback we give it here
// This function creates a new user, and the password is overwritten; the password should = whatever the user's password was but encryoted

User.beforeCreate(async user => {
    console.log('intercepted data: ', user);
    user.password = await bcrypt.hash(user.password, 10);
})

module.exports = User; 