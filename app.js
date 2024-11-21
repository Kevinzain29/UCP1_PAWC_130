const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session setup
app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: true,
}));

// Set EJS
app.set("view engine", "ejs");

// Routes
const animalRoutes = require("./routes/animalRoutes");
app.use("/", animalRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
