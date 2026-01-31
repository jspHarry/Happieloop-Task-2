
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jaspinder0029_db_user:bg8SUzpwVZmYJS6j@cluster0.0lwhhnw.mongodb.net/todoDashboard?retryWrites=true&w=majority"
).then(() => console.log("MongoDB Connected"));

app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
