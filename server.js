//Install express server
const express = require('express');
// const path = require('path'); !!!!!!!!!!11
const cors = require("cors");

const app = express();

// app.use(cors()); !!!!!!!!!!11

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-registration'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/angular-registration/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);