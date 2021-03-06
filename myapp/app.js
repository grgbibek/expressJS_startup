// /*/*/*var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// /*app.use(express.static('public'));
// */
// app.use('/[0-9]{5}', indexRouter);
// app.use('/users', usersRouter);
// app.get('/first_template',(req,res)=>res.render('first_view'));
// //passing values to pug files
// //this one is not working at the moment
// app.get('/dynamic_view',function(req, res){
//    res.render('dynamic', {
//       name: "TutorialsPoint", 
//       url:"http://www.tutorialspoint.com"
//    })
// });

// app.get('/components',(req,res)=>res.render('content.pug'));

// app.get('/image/getImage',(req,res)=>res.render('testimage.pug'));

// //middlewares
// app.use(function(req, res, next){
//    console.log("Start");
//    next();
// });

// //Route handler
// app.get('/', function(req, res, next){
//    res.send("Middle");
//    next();
// });

// app.use('/', function(req, res){
//    console.log('End');
// });




// app.get('*',(req,res)=>res.send("Invalid URL"));

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
// */*/*/

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});