const Student = require("../models/studentModel");

// Create student
exports.createStudent = async (req, res) => {
  try {
    const { name, email, branch } = req.body;
    const student = await Student.create({ name, email, branch });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

// Update student
exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(student);
};

// Delete student
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
};
