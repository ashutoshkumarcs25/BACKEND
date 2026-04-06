const express = require('express');
const PORT = 3000;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

const users = [];
const SECRET = "supersecretkey";

// 🔹 Signup
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hashedPassword
    });

    res.send({
        message: "User signed up successfully"
    });
});

// 🔹 Signin
app.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(403).send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(403).send({ message: "Invalid password" });
    }

    const token = jwt.sign(
        { username: user.username },
        SECRET,
        { expiresIn: "1h" }
    );

    res.send({ token });
});

// 🔹 Middleware
function auth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; // ✅ Bearer fix

    if (!token) {
        return res.status(401).send({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send({ message: "Invalid token" });
    }
}

// 🔹 Protected route
app.get("/me", auth, (req, res) => {
    res.send({
        username: req.user.username
    });
});

// ✅ FIXED HERE
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});