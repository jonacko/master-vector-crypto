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

const comments = [
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

// in syncronous code, executes in the same order
// async code = .then, .catch - don't know how long it's going to take as timeout isn't specified eg. fetch().then(function()

// bulkCreate = create and insert multiple instances in bulk; add multiple rows at once

const seedData = async () => {

await User.bulkCreate(users);
await Post.bulkCreate(posts);
await Comment.bulkCreate(comments);
};

seedData();