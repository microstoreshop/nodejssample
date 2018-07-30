var express = require("express");
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get("/hello", function(req, res) {
   res.send('Hello nodejs Service!'); 
});
 
app.get('/health', (req, res) => {
    res.json({
        status: 'UP'
    })
})

app.get('/', function(req, res) {
   res.render('index', {'title': 'Hey', 'message' : "Hello there!"}); 
});

app.post('/', function(req, res) {
   console.log(req.body);
   res.send('Thank you!');
});

var server = app.listen(5000, function() {
    console.log("Listening on port %d", server.address().port);
});