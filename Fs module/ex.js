const { error } = require("console");
const fs = require("fs");
// fs.unlink("note.txt",(err) => {
// if (err)console.log(err.message);
// console.log("FIle deleted");
// });

// Sync Written
// const data = fs.readFileSync("note.txt","utf-8");
// console.log(data)

// sync write

// fs.writeFile("./note.txt", "Hello World", "utf-8", (err) => {
//   if (err) throw err;
//   console.log("File written");
// });

// console.log("This runs first");

// create folder inside folder

// fs.mkdir("uploads",(err) => {
// if (err)throw err;
// });

fs.readdir("uploads",(err, files) => {
console.log(files);
});


