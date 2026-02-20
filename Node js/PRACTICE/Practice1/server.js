const http = require("http");
const fs = require("fs");
const { URL } = require("url");

const FILE = "notes.json";


if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, "[]");
}

http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  const path = myUrl.pathname;

 
  if (req.method === "GET" && path === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Notes API running");
  }

  
  if (req.method === "GET" && path === "/notes") {
    const id = myUrl.searchParams.get("id");

    fs.readFile(FILE, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("File read error");
      
      }

      const notes = JSON.parse(data || "[]");

      if (id) {
        const note = notes.find(n => String(n.id) === String(id));
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(note || {}));
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(notes));
    });
    return;
  }

  // Add notes 


       if (req.method === "POST" && path === "/notes") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const newNote = JSON.parse(body);

      fs.readFile(FILE, "utf8", (err, data) => {
        const notes = JSON.parse(data || "[]");
        notes.push(newNote);

        fs.writeFile(FILE, JSON.stringify(notes, null, 2), () => {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Note saved" }));
        });
      });
    });
    return;
  }

  // 404

  res.writeHead(404);
  res.end("Not Found");

}).listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
