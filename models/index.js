const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Sequelize documentation: The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).

// Sequelize documentation: "The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A)."

User.hasMany(Post, {
    foreignKey: 'user_id'
    })
    
    User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
    });
    
    // Sequelize documentation: "The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A)."
    
    Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
    });
    
    Post.hasMany(Comment, {
        foreignKey: 'post_id'
    });
    
    Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
    });
    
    Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
    });

module.exports = {
    User,
    Comment,
    Post
}