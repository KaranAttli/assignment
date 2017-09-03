var express = require('express');
var bodyParser = require('body-parser');
var Routes = express.Router();

var app=express();




app.use(bodyParser.urlencoded({extended:true}));

app.use('/',express.static(__dirname+'/public'));

app.set('views',__dirname+'/views');
app.set('engine','ejs');


var port = process.env.PORT || 4000 ;

app.listen(port,function () {
    console.log("Server is running at port "+port);
});

app.use('/',Routes);
require(__dirname+'/Routes/routes.js')(Routes);

