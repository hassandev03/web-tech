var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { log } = require('../../packages/utils/index.js');
const { mockData } = require('../../packages/utils/mock.js');
const { isAuthenticated } = require('../../packages/auth/index.js');

log('API App starting up with monorepo packages! Is Authenticated? ' + isAuthenticated());

var indexRouter = require('./routes/index');

// DDD domains
var userRoutes = require('./src/user/user.routes');
var postRoutes = require('./src/post/post.routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// Mount DDD routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

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
