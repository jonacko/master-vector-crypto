const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Post.findAll({
          attributes: [
              'id',
              'title',
              'content',
              'created_at'
          ],
          include: [{
                  model: Comment,
                  attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                  include: {
                      model: User,
                      attributes: ['username']
                  }
              },
              {
                  model: User,
                  attributes: ['username']
              }
          ]
      })
    .then((dbPostData) => {

    // Serialize data so the template can read it
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.username,
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });


  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    res.render('signup');
  });




  router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'content', 'title'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'post_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('single-post', {
          post,
          logged_in: req.session.logged_in,
          username: req.session.username,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  router.get('/posts-comments', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'content', 'title'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'content', 'post_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        const post = dbPostData.get({ plain: true });
  
        res.render('posts-comments', {
          post,
          logged_in: req.session.logged_in,
          username: req.session.username,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  


// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
})