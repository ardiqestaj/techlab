import express from "express";
import { readData, writeData, getNextId } from "./dataHelper.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Simple Student REST API",
    enpoints: {
      "GET /students": "Get all Students",
      "GET /students/:id": "Get Student by ID",
      "POST /students": "Create new student",
      "PUT /students/:id": "Update student by ID",
      "DELETE /students/:id": "Delete student by ID",
    },
  });
});

// READ - Get all students
app.get("/students", (req, res) => {
  const data = readData();
  res.json({
    success: true,
    data: data.students,
    count: data.students.length,
  });
});

// READ - Get single student by ID
app.get("/students/:id", (req, res) => {
  const data = readData();
  const studentID = parseInt(req.params.id);

  const student = data.students.find((student) => student.id === studentID);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  res.json({
    success: true,
    data: student,
  });
});

// Create new student
app.post("/students", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  const course = req.body.course;

  if (!name || !email || !age || !course) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email, age and couse",
    });
  }

  const data = readData();
  const existingStudent = data.students.find((s) => s.email === email);
  if (existingStudent) {
    return res.status(400).json({
      success: false,
      message: "Student with this email already exist",
    });
  }

  const newStudent = {
    id: getNextId(),
    name: name,
    email: email,
    age: age,
    course: course,
  };
  data.students.push(newStudent);

  if (writeData(data)) {
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: newStudent,
    });
  } else {
    res.status(500).json({
      success: false,
      message: "Error saving student",
    });
  }
});

// Update Student
app.put("/students/:id", (req, res) => {
  const data = readData();
  const studentId = parseInt(req.params.id);

  console.log(typeof studentId);
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  const course = req.body.course;
  // const { name, email, age, course } = req.body;

  const studentIndex = data.students.findIndex((s) => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  if (name) {
    data.students[studentIndex].name = name;
  }
  if (email) {
    data.students[studentIndex].email = email;
  }
  if (age) {
    data.students[studentIndex].age = age;
  }
  if (course) {
    data.students[studentIndex].course = course;
  }

  if (writeData(data)) {
    res.json({
      success: true,
      message: "Student updated successfully",
      data: data.students[studentIndex],
    });
  } else {
    res.status(500).json({
      success: false,
      message: "Error updating student",
    });
  }
});

// Delete Student
app.delete("/students/:id", (req, res) => {
  const data = readData();
  const studentID = parseInt(req.params.id);
  console.log(studentID, "studentID");
  const studentIndex = data.students.findIndex(
    (student) => student.id === studentID
  );
  if (studentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found",
    });
  }

  const deletedStudent = data.students[studentIndex];

  data.students.splice(studentIndex, 1);

  if (writeData(data)) {
    res.json({
      success: true,
      message: "Student deleted successfully",
      data: deletedStudent,
    });
  } else {
    res.status(500).json({
      success: false,
      message: "Error deleting student",
    });
  }
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
