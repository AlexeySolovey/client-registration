//Install express server
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const PORT = process.env.PORT || 4444;

const api = require("./server/routes/api");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/angular-registration'));
app.use("/api", api);

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/angular-registration/index.html'));
    // const events = [
    //     {
    //       _id: "1",
    //       name: "event1",
    //       description: "lorem1 lorem1 lorem1",
    //       data: "2020-03-17"
    //     },
    //     {
    //       _id: "3",
    //       name: "event3",
    //       description: "lorem3 lorem3 lorem3",
    //       data: "2020-03-17"
    //     },
    //     {
    //       _id: "5",
    //       name: "event1",
    //       description: "lorem5 lorem5 lorem5",
    //       data: "2020-03-17"
    //     },
    //     {
    //       _id: "7",
    //       name: "event7",
    //       description: "lorem7 lorem7 lorem7",
    //       data: "2020-03-17"
    //     }
    //   ];
    //   res.json(events);
});



app.listen(PORT, function() {
   console.log("Server running on localhost:" + PORT);
});