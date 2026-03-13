const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    
    if (req.method === "POST" && req.url === "/data") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
       
            fs.readFile("data.json", "utf8", (err, data) => {
                let arr = JSON.parse(data || "[]");

                const newData = {
                    id: arr.length + 1,
                    data: body
                };

                arr.push(newData);

                fs.writeFile("data.json", JSON.stringify(arr, null, 2), () => {
                    res.writeHead(200, {"Content-Type":"application/json"});
                    res.end(JSON.stringify(newData));
                });

            });

        });

    }

    // GET request
    else if (req.method === "GET" && req.url === "/data") {

        fs.readFile("data.json", "utf8", (err, data) => {
            res.writeHead(200, {"Content-Type":"application/json"});
            res.end(data);
        });

    }

    // DELETE request  /data?id=2
    else if (req.method === "DELETE" && req.url.startsWith("/data")) {

        const url = new URL(req.url, `http://${req.headers.host}`);
        const id = parseInt(url.searchParams.get("id"));

        fs.readFile("data.json", "utf8", (err, data) => {

            let arr = JSON.parse(data || "[]");

            const newArr = arr.filter(item => item.id !== id);

            fs.writeFile("data.json", JSON.stringify(newArr, null, 2), () => {

                res.writeHead(200, {"Content-Type":"application/json"});
                res.end(JSON.stringify({
                    message: "Data deleted",
                    id: id
                }));

            });

        });

    }

    else {
        res.writeHead(404, {"Content-Type":"text/plain"});
        res.end("Route not found");
    }

});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});