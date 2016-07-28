var express = require('express');
var logger = require('morgan');
var pug = require('pug');

var app = express();
var template = pug.compileFile(__dirname + '/source/templates/homepage.pug');

app.set('port', (process.env.PORT || 5000)); // Save the port value in app so it can be retrieved later.

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response, next) {
    try {
        var html = template({
            title: 'Home'
        });
        response.send(html);
    } catch (e) {
        next(e);
    }
});

app.listen(app.get('port'), function() {
    console.log('Node app is listening on port ' + app.get('port'));
});
