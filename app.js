const express = require('express');
const connectToDatabase = require('./db');
const uRouter = require("./routes/user");
const pRouter = require("./routes/posts");

const app = express();
// Middleware
app.use(express.json());

// Define routes
app.use("/user", uRouter);
app.use("/post", pRouter);

const port = 3010;

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
