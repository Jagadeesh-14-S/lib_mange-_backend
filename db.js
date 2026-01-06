const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/libraryDB")
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

module.exports = mongoose;