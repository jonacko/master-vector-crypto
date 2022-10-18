// const express = require('express');
// const session = require('express-session');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');
// const path = require('path');

// const sequelize = require('./config/connection');
// const expressHandlebars = require('express-handlebars');
// const sequelizeStore = require('connect-session-sequelize')(session.Store);
// const express = require('express');
// const path = require('path');
// const session = require('express-session');

// const app = express();
// const PORT = process.env.PORT || 3002;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new sequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// const hbs = expressHandlebars.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// require('./models');

// // app.use(routes);

// sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () => console.log('Now listening!'));
// });``


const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});