const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Datastore = require("nedb");

const app = express();

const tododb = new Datastore("./tododb.db");
tododb.loadDatabase();

const logindb = new Datastore("./logindb.db");
logindb.loadDatabase();

let urlencodedParser = bodyParser.urlencoded({extended: false});

const port = process.env.PORT || 5000;

app.use(express.json({limit: "1mb"}));

app.post("/api/addtodo", urlencodedParser, (req, res) => {
  tododb.insert(req.body);
});

app.post("/api/adduser", urlencodedParser, (req, res) => {
  logindb.insert(req.body);
});

app.post("/api/updatetodo", urlencodedParser, (req, res) => {
  let newState = "";
  tododb.find({_id: req.body.ID}, (err, data) => {
    if (data[0].status === "Incomplete") newState = "Ongoing";
    else if (data[0].status === "Ongoing") newState = "Complete";
    else newState = "Incomplete";

    tododb.update({_id: req.body.ID}, {$set: {status: newState}});
  });
});

app.get("/api/todo", (req, res) => {
  tododb.find({}, (err, data) => {
    res.json(data);
  });
});

app.get("/api/login", (req, res) => {
  logindb.find({}, (err, data) => {
    res.json(data);
  });
});

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set Static folder to Serve
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
