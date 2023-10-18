var express = require('express');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

// ... setup sequelize //
// ... setup handlebars //
// ... set up routes //

var app = express();

app.use(session({
    secret: 'your-secret', 
    store: new SequelizeStore({
        db: sequelize
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
