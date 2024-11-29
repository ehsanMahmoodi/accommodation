const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_URI)
  .then(() => console.log("mongodb connected."))
  .catch((err) => console.log(err.message || "mongodb connection failed!"));
