const fs = require("fs");
const path = require('path');


const fileName = "fspromise.txt";
const filePath= path.join(__dirname,fileName);
const filepath1= __dirname;
// fs.promises
// .readdir(filepath1)
// .then((data) =>console.log(data))
// .catch((err) =>console.log(err));


// Cretae or Write file 

// fs.promises.writeFile(filePath,"This is the initaial data", "utf-8")
// .then(console.log("File created successfully"))
// .catch((err)  => console.log(err));

// ReadFile 


// fs.promises.readFile(filePath, "utf-8")
// .then((data) =>console.log(data))
// .catch((err)  => console.log("Error encoding file",err));

// Updte file or appendfile 

// fs.promises.appendFile(filePath," \nThis is the updated  data", "utf-8")
// .then(console.log("File updated  successfully"))
// .catch((err)  => console.log(err));


// File deleted or unlink 

// fs.promises.unlink(filePath)
// .then(console.log("File Deleted  successfully"))
// .catch((err)  => console.log( "Error deleting file",err));

