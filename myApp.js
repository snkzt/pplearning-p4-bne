var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Get Data from POST Requests
app.use(bodyParser.urlencoded({extended: false}));
app.post('/name', (req, res) => { 
  const firstName  = req.body.first; 
  const lastName = req.body.last;
  res.json({name: `${firstName} ${lastName}`});
});

////Use body-parser to Parse POST Requests
// app.use('/', bodyParser.urlencoded({extended: false}));

////Get Query Parameter Input from the Client
// app.get('/name', (req, res) => {
//   let firstname = req.query.first;
//   let lastname = req.query.last;
//   res.json({name: `${firstname} ${lastname}`});
// });

//// Get Route Parameter Input from the Client
// app.get('/:word/echo', (req, res) => {
//   res.send({echo: req.params.word})
// });

//// Chain Middleware to Create a Time Server
// app.get('/now',(req, res, next) => {
//   req.time = new Date().toString();
//   next();
// },
// (req, res) => {
//   res.send({time:req.time});
// }
// );

// Implement a Root - Level Request Logger Middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// });

// Serve JSON on a Specific Route + Use the .env File
// function word() {
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     return "Hello json".toUpperCase();
//   }
//   return "Hello json";
// }

// app.get('/json', (req, res) => {
//   const response = word();
//   return res.json({'message': response});
// });

// //Serve Static Assets
// app.use('/public', express.static(__dirname + '/public'));

// //Serve an HTML File
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html')
// });

module.exports = app;























 module.exports = app;
