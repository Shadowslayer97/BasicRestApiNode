var express = require('express');
var users = require('./users');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');


app.get('/',function(req,res){

  res.render('home',{});
})

app.get('/:id',function(req,res){
  var userId = req.params.id;
  var user = users["user"+userId];
  res.status(200).send(user);
})

app.post('/new',function(req,res){
  var newUser = {
    username : req.body.username,
    password : req.body.password
  }
  //Logic to add new user to ...
  res.status(200).send('User added');
})

app.listen(3000,function(){
  console.log('Server started at port 3000');
})
