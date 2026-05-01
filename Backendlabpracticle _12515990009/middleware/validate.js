module.exports = (req, res, next) => {
    const { name, course, age } = req.body

    if (!name || !course || !age) {
        return res.status(400).json({ message: "All fields are required" })
    }

    if (typeof age !== "number") {
        return res.status(400).json({ message: "Age must be number" })
    }

    next()
}
