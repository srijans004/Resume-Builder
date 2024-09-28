const mongoose = require("mongoose");
const URL =
  "mongodb+srv://ADMIN1:ADMIN1@mern-app.abfekv7.mongodb.net/?retryWrites=true&w=majority&appName=MERN-APP";
mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongo DB connection successful");
});
connection.on("error", (error) => {
  console.log(error);
});
