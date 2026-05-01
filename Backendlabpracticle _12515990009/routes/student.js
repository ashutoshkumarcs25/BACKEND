const express = require("express")
const router = express.Router()
const validate = require("../middleware/validate")

let students = [
{
id: 1,
name: "Aman",
course: "MERN",
age: 21
},
{
id: 2,
name: "Riya",
course: "Data Science",
age: 22
},
{
id: 3,
name: "Karan",
course: "DevOps",
age: 23
},
{
id: 4,
name: "Sneha",
course: "UI/UX",
age: 20
}
]

router.get("/", (req, res) => {
    res.status(200).json(students)
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const student = students.find(s => s.id === id)

    if (!student) {
        return res.status(404).json({ message: "Student not found" })
    }

    res.status(200).json(student)
})

router.post("/", validate, (req, res) => {
    const { name, course, age } = req.body

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name,
        course,
        age
    }

    students.push(newStudent)

    res.status(201).json(newStudent)
})

router.put("/:id", validate, (req, res) => {
    const id = parseInt(req.params.id)
    const index = students.findIndex(s => s.id === id)

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" })
    }

    students[index] = { id, ...req.body }

    res.status(200).json(students[index])
})

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = students.findIndex(s => s.id === id)

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" })
    }

    const deleted = students.splice(index, 1)

    res.status(200).json(deleted[0])
})

module.exports = router