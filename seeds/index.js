const {
    User,
    Post,
    Comment }
    = require('../models');

const users = [
    {
    username: 'Jess',
    password: 'kinderbueno123'
    },

    {
    username: 'Sam',
    password: 'kitkat123'
    },

    {

    username: 'Ben',
    password: 'milkybar123'
    },

]

const posts = [
    {
        title: 'halloween keyboard review',
        content: 'all I care about is ghost!!!!!!!!',
        user_id: 2
    },

    {
        title: 'backend teching is hard',
        content: 'sooooooooo hard',
        user_id: 1
    },

    {
        title: 'UI is fun',
        content: 'the funnest',
        user_id: 4
    }

]

const comments = [
    {
        content: 'Wow this is great',
        user_id: 4
    },

    {
        content: 'This sucks',
        user_id: 2
    },
]

// in syncronous code, executes in the same order
// async code = .then, .catch - don't know how long it's going to take as timeout isn't specified eg. fetch().then(function()

// bulkCreate = create and insert multiple instances in bulk; add multiple rows at once

(async () => {

await User.bulkCreate(users);
await Post.bulkCreate(posts);
await Comment.bulkCreate(comments);
});