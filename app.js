var express = require ('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');

//Koneksi Database
mongoose.connect(config.database,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    //we are connected!
    console.log('Connected to MongoDB');
});

//Initial
var app = express();

//Set View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//set Public Folder
app.use(express.static(path.join(__dirname,'public')));

//Membuat halaman index
app.get('/',function(req,res,next){
    //res.json('ini halaman index');
    res.render('index',{
        title : "Home"
    })
});

//set up Server
var port = 3000;
app.listen(port,function(){
    console.log('Server sukses listen to ' + port);
});