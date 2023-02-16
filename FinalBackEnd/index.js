const mongoose = require("mongoose");
const tech = require("express");
const model = require("./model");
const bodyParser = require("body-parser");
//const cors = require("cors");
var app = tech();

const port = 5000;
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

//connection
mongoose.connect("mongodb://127.0.0.1:27017/exercise"),
  {
    useNewUrlParser: true,
  };

mongoose.connection.once("open", () => {
  console.log("Database is connected succesfully");
});
app.listen(port, () => {
  console.log("port is connected");
});
//data post
app.post("/activity", (req, res) => {
  console.log("API POST");
  const card = model(req.body);
  card
    .save()
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
});
//data get
app.get("/act", async (req, res) => {
  console.log("API GET");
  const create = await model.find();
  console.log("LOG: ", create);
  res.status(200).json({ data: create });
});
//data updata
app.post("/acty/:id", (req, res) => {
  let taskid = req.params.id;
  console.log(taskid);
  model.findById(taskid, (err, val) => {
    if (err) {
      res.send("Error");
    } else {
      val.Name = req.body.Name;
      val.Decription = req.body.Decription;
      val.Activity = req.body.Activity;
      val.Duration = req.body.Duration;
      val.Date = req.body.Date;

      val.save();
      res.send(val);
    }
  });
});

//update get
//  
app.get("/actty/:id", (req, res) => {
  let getid = req.params.id;
  model.findById(getid, (err, val) => {
    if (err) {
      res.send("Error");
    } else {
      res.send(val);
    }
  });
});
//delet
app.delete("/del/:id", (req, res) => {
  let getid = req.params.id;
  model.findByIdAndDelete(getid, (err, val) => {
    if (err) {
      res.send("Error");
    } else {
      res.send(val);
    }
  });
});
