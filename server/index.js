const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000

//Middleware
app.use(express.static(path.join(__dirname, "../public")));

//const hello = require("../hello");
//req- request, res- respond
app.get('/', function (req, res){
    //res.send(hello());
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () =>
    console.log(`
        Listening on Port ${PORT}
        http://localhost:${PORT}
    `),
);