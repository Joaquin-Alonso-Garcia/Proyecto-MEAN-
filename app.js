var createError = require('http-errors');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//modelo en app_api
require('./app_api/models/db')

exphbs.create({
    helpers: {
        jsonHelper: function (value) {
            return JSON.stringify(value);
        }
    }
  });

  exphbs.create('json', function(context) {
    return JSON.stringify(context);
});



var indexRouter = require('./appServer/routes/index');
var usersRouter = require('./appServer/routes/users');
//routes api
var routesApi = require('./app_api/routes/index');

var app = express();

// view engine setup
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'appServer','views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api',routesApi)
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
