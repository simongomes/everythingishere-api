var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var hackerNewsRouter = require('./routes/hacker-news');
// var channelRouters = require('./routes/channelRouters');
// var storyRoutes = require('./routes/storyRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Assign Roter Entries
app.use('/', indexRouter);
// app.use('/channels', channelRouters);
// app.use('/hacker-news', hackerNewsRouter);
// app.use('/stories', storyRoutes);

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
  res.send({
    message: 'You are trying to get what is not there!'
  });
});

module.exports = app;
