var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var requirejs = require('requirejs');
var _ = require('lodash');

var config = require('./lib/config');

var page1 = require('./routes/page1');
var page2 = require('./routes/page2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (app.get('env') === 'production') {
    requirejs.optimize(_.cloneDeep(config.requirejs));
    app.use(express.static(path.join(__dirname, 'public_build')));
} else {
    app.use(express.static(path.join(__dirname, 'public')));
}

// make require config available to template
app.use(function(req, res, next) {
    res.locals.requireConfig = JSON.stringify({
        baseUrl: config.requirejs.baseUrl,
        paths: config.requirejs.paths,
        shim: config.requirejs.shim
    });
    next();
});

app.use('/page1', page1);
app.use('/page2', page2);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
