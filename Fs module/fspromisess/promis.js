const fs = require("fs");
const path = require('path');


const fileName = "fspromise.txt";
const filePath= path.join(__dirname,fileName);
const filepath1= __dirname;
fs.promises
.readdir(filepath1)
.then((data) =>console.log(data))
.catch((err) =>console.log(err));