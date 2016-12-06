var express = require('express')
var app = express()

var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  var response = {success:true}       
  res.json(response)
})


app.post('/auth', function(req,res){
    console.log(req.body);
    var respStr;
    if(req.body.name === req.body.pwd){
        respStr = {success: true}
    }
    else{
        respStr = {success: false}
    }
    res.json(respStr);
})

app.get('/employees', function(req,res){
    var employees = [
            {"title":"AngularJS", "content": "Framework by google. Angular 2 is the latest and follows a much better approach."},
            {"title":"ReactJS", "content":"Library by Facebook. Relies on virtual DOM. Good for performance and very easy to learn."},
             {"title":"EmberJS", "content":"Library by Facebook. Relies on virtual DOM. Good for performance and very easy to learn."}
            
]
    
    res.json(employees);
})
 
app.listen(3000)