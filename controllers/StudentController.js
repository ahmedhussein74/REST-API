const Student = require("../models/StudentModel");

const getStudents = async (req, res) => {
  try {
    const students = await Student.find(req.query);
    res.json(students);
  } catch (error) {
    console.log(error);
  }
};

const addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const newStudent = await student.save();
    res.json(newStudent);
  } catch (error) {
    console.log(error);
  }
};

const updateStudent = async (req, res) => {
  try {
    const UpdatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(UpdatedStudent);
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const DeletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.json(DeletedStudent);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getStudents, addStudent, updateStudent, deleteStudent };
