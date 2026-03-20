const express = require("express");
const app = express();
const PORT = 3000;

// ADD
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send((a + b).toString());
});

// SUBTRACT
app.get("/sub", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send((a - b).toString());
});

// MULTIPLY
app.get("/mul", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send((a * b).toString());
});

// DIVIDE
app.get("/div", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (b === 0) return res.send("Cannot divide by zero");

    res.send((a / b).toString());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});