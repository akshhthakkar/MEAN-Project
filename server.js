import express from "express";
import "./db.js";
import Student from "./models/Student.js";

const app = express();

app.get("/", async (req, res) => {
  const students = await Student.find();

  let html = `
    <html>
    <head>
      <title>Student Details Page</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h3 { color: #333; }
        table { border-collapse: collapse; width: 100%; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background-color: #4CAF50; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
        tr:hover { background-color: #ddd; }
        .active { color: green; font-weight: bold; }
        .inactive { color: red; font-weight: bold; }
      </style>
    </head>
    <body>
      <h3>Student Detail Page</h3>
      <h4>Student Count: ${students.length}</h4>
  `;

  if (students.length > 0) {
    html += `
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Email</th>
            <th>CGPA</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
    `;

    students.forEach((student, index) => {
      html += `
        <tr>
          <td>${index + 1}</td>
          <td>${student.studentId}</td>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${student.branch}</td>
          <td>${student.year}</td>
          <td>${student.email}</td>
          <td>${student.cgpa}</td>
          <td class="${student.isActive ? "active" : "inactive"}">${student.isActive ? "Active" : "Inactive"}</td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
  } else {
    html += `<p>No students found.</p>`;
  }

  html += `</body></html>`;

  res.send(html);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
