const router = require("express").Router();

const {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/StudentController");

router.get("/", getStudents);

router.post("/", addStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;
