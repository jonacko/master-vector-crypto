const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Sequelize documentation: The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).

User.hasMany(Post, {
foreignKey: 'user_id',
onDelete: 'CASCADE'
})

User.hasMany(Comment, {
foreignKey: 'user_id',
onDelete: 'CASCADE'
});

// Sequelize documentation: "The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A)."

Post.belongsTo(User, {
foreignKey: 'user_id',
onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
foreignKey: 'user_id',
onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
foreignKey: 'post_id',
onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Post
}