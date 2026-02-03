import express from "express";
import db from "./db.js";
import Student from "./models/Student.js";

const app = express();

app.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    let html = `
    <h3>Hello This is Student Detail Page</h3>
    <pre>${JSON.stringify(students, null, 2)}</pre>
    `;
    res.send(html);
  } catch (err) {
    res.status(500).send("Error fetching students");
  }
});

app.get("/about", (req, res) => {
  res.send("About Page of PU.");
});

app.get("/contact", (req, res) => {
  res.send("Our contact number is 1234567890.");
});

app.listen(3000, () => {
  console.log("PU Server is running on http://localhost:3000");
});
