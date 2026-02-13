const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 4000;

const NOTES_FILE = path.join(__dirname, "notes.json");


if (!fs.existsSync(NOTES_FILE)) {
  fs.writeFileSync(NOTES_FILE, "[]", "utf8");
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;


  if (req.method === "GET" && pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Welcome to Notes API");
  }


  if (req.method === "GET" && pathname === "/notes") {
    const id = url.searchParams.get("id");

    fs.readFile(NOTES_FILE, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error reading notes");
      }

      const notes = JSON.parse(data || "[]");

      res.writeHead(200, { "Content-Type": "application/json" });
      if (id) {
        const note = notes.find((n) => String(n.id) === String(id));
        return res.end(JSON.stringify(note || {}));
      } else {
        return res.end(JSON.stringify(notes));
      }
    });
    return;
  }

  
  if (req.method === "POST" && pathname === "/notes") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
     
      const newNote = JSON.parse(body);

      fs.readFile(NOTES_FILE, "utf8", (err, data) => {
        const notes = JSON.parse(data || "[]");

        
        if (!newNote.id) {
          newNote.id = Date.now();
        }

        notes.push(newNote);

        fs.writeFile(NOTES_FILE, JSON.stringify(notes, null, 2), "utf8", () => {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Note added", note: newNote }));
        });
      });
    });
    return;
  }

  
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route not found");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
