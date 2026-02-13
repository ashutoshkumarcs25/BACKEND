const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    
    req.on("end", () => {
      fs.writeFile("data.txt", body, "utf-8", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Done");
      });
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
