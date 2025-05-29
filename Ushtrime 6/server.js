import express from "express";
import fs from "fs";

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

function readData() {
  try {
    const data = fs.readFileSync("data.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return { students: [] };
  }
}

function writeData(data) {
  try {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Error writing data:", error);
    return false;
  }
}

function getNextId() {
  const data = readData();
  if (data.students.length === 0) {
    return 1;
  }

  const maxId = Math.max(...data.students.map((student) => student.id));
  return maxId + 1;
}

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

// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
