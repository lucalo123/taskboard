var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/v1/api', function(req, res) {
  res.json({tests: 'tested'});
});

app.listen(port, function() {
  console.log('[express]: Listening on port: ' + port);
});
