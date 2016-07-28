var express = require('express');
var logger = require('morgan');
var pug = require('pug');

var app = express();
var template = pug.compileFile(__dirname + '/source/templates/homepage.pug');

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res, next) {
    try {
        var html = template({
            title: 'Home'
        });
        res.send(html);
    } catch (e) {
        next(e);
    }
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000));
});
