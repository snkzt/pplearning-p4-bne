var express = require('express');
var app = express();

app.use((req, res, next) => {
console.log(req.method + " " + req.path + " - " + req.ip)
next();
})

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

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html')
// });

// app.use('/public', express.static(__dirname + '/public'));

module.exports = app;



































 module.exports = app;
