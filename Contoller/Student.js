// studentController.js
const routers =  require('express').Router()
const Student = require('../Model/Student');

 routers.get("/",async (req, res) => {

    try {
      const students = await Student.find();
      return res.json(students);
    } catch (err) {
     return res.status(500).json(err.message);
    }

  })

routers.get("/:id",async (req, res) => {
    const { id } = req.params;
    try {
      const student = await Student.findById(id);
      if (student) {
       return res.json(student);
      } else {
       return res.status(404).json('Student not found');
      }
    } catch (err) {
     return res.status(500).json(err.message);
    }
})

routers.post("/",async (req, res) => {
    const { id, name, age } = req.body;
    const newStudent = new Student({ id, name, age });
    try {
       await newStudent.save();
      return res.status(201).json('Student added successfully');
    } catch (err) {
      return res.status(500).json(err.message);
    }
  })

  routers.put("/:id", async (req, res) => {

    const { id } = req.params;
    const updatedStudent = req.body;

    try {
      const result = await Student.findOneAndUpdate({id:id}, updatedStudent);
      if (result) {
       return res.json('Student updated successfully');
      } else {
       return res.status(404).json('Student not found');
      }

    } catch (err) {
      return res.status(500).json(err.message);
    }
  })

  routers.delete("/:id",async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Student.findOneAndDelete({id:id});
      if (result) {
       return res.json('Student deleted successfully');
      } else {
        return res.status(404).json('Student not found');
      }
    } catch (err) {
     return  res.status(500).json(err.message);
    }
  })


module.exports = routers