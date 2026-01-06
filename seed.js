const mongoose = require("./db");
const Book = require("./bookModel");

const data = [
  { title: "Clean Code", author: "Robert Martin", category: "Programming", publishedYear: 2008, availableCopies: 3 },
  { title: "Atomic Habits", author: "James Clear", category: "Self Help", publishedYear: 2018, availableCopies: 6 },
  { title: "Deep Work", author: "Cal Newport", category: "Productivity", publishedYear: 2016, availableCopies: 4 },
  { title: "Harry Potter", author: "J.K. Rowling", category: "Fiction", publishedYear: 2007, availableCopies: 7 },
  { title: "AI Basics", author: "Tom Taulli", category: "Technology", publishedYear: 2020, availableCopies: 5 },
  { title: "Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", publishedYear: 1999, availableCopies: 3 }
];

const seedDB = async () => {
  try {
    await Book.deleteMany({}); // Clears existing books so you don't get duplicates
    await Book.insertMany(data);
    console.log("✅ Database Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding database:", err);
    process.exit(1);
  }
};

seedDB();