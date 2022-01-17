const express = require("express");
const app = express();
const TutuRoute = require("./routes/tutorialRoute");
const PostRoute = require("./routes/postRoute");
const UserRoute = require("./routes/UserRoute");
const connection = require("./config/config");
require("dotenv").config();
const PORT = process.env.PORT || 4500;
connection();
const fs = require("fs");

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/tutorial", TutuRoute);
app.use("/posts", PostRoute);
app.use("/user", UserRoute);

app.get("/", (req, res) => {
  // res.send('hello kiran')
  fs.readFile("movies.json", (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    res.send(data.toString());
  });
});

app.post("/movies", (req, res) => {
  try {
    fs.readFile("movies.json", (err, data) => {
      data = JSON.stringify(req.body);
      console.log(data);
      fs.writeFile("movies.json", data, (err) => {
        if (err) return callback(err);
        console.log("file created successfully!");
        res.send(data.toString());
      });
    });
  } catch (err) {
    res.status(500).json({ status: "error", data: err });
  }
});

app.listen(PORT, () => {
  console.log(`app running in this port ${PORT}`);
});
