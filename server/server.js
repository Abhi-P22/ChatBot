const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require("./models");
const routes = require("./routes/chatbot"); // Updated to use index.js in routes
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

app.use(bodyParser.json());
app.use("/api", routes);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});
