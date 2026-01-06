const express = require("express");
const cors = require("cors");
const mongoose = require("./db"); 
const libraryRouter = require("./libraryCRUD");

const app = express();

// 1. Updated CORS: Authorizing your Netlify URL
app.use(cors({
    origin: "https://695a59398870fdae28a4e8a7--marvelous-kelpie-2a0b98.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/books", libraryRouter);

// 2. Updated PORT: Essential for cloud deployment (like Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
