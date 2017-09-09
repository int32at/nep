var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', { title : 'Home' });
});

app.listen(3000, function () {
  console.log('Server started.');
});
