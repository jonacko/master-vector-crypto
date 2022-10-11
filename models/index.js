const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Sequelize documentation: The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).

// Sequelize documentation: "The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A)."

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
 });
 Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
 });
 Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
 });

 module.exports = { User, Post, Comment };