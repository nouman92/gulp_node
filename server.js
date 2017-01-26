var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(__dirname +'/dist'));
app.listen(9999);

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})
//app.listen(port);
