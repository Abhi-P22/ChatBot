const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require("./models");
const routes = require("./routes/chatbot"); 
const app = express();

app.use(cors({
    origin: process.env.origin || 'https://chatbotrepo.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

app.use(bodyParser.json());
app.use("/api", routes);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});
