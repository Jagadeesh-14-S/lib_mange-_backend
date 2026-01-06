const express = require("express");
const cors = require("cors");
const mongoose = require("./db"); // Initializes DB connection
const libraryRouter = require("./libraryCRUD");

const app = express();

// Middleware
app.use(cors()); // Critical: Allows frontend access
app.use(express.json());

// Use the library routes
app.use("/books", libraryRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});