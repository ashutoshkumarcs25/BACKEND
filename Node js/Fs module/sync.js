
// To perform crud operation 

const { error, log } = require("console");
const fs = require("fs");
const path = require('path');


// Sync Written

//  const fileName = "test.txt";
// const writeFile = fs.writeFileSync(fileName, "this is inital data","utf-8");
// console.log(writeFile);  

//  write data with path


// const fileName = "test.txt";
// const filePath= path.join(__dirname,fileName);
// console.log(__dirname);
// const writeFile = fs.writeFileSync(fileName, "this is inital data ","utf-8");
// console.log(writeFile);


//  readData 
// const readFile=fs.readFileSync(
// filePath,
// "utf-8");
// console.log(readFile);

// Appendfile 

// const appendfile = fs.appendFileSync(
//   filePath,
//    "\nthis is updated  data ","utf-8");
// console.log(appendfile);

// Unlinl or Delete file 

// const deleteFile = fs.unlinkSync(

//   filePath,
// );
// console.log(deleteFile);


// Rename File 
// Older file path 

// const fileName = "new.txt";
// const filePath= path.join(__dirname,fileName);
// console.log(__dirname);

// New path or new fileName

// const newUpdatedFile = "updated.txt";
// const  newFilepath= path.join(__dirname, newUpdatedFile);
// const  renameFile = fs.renameSync(filePath ,newFilepath );
// console.log(renameFile);


// without sync write

// fs.writeFile(".test.txt", "Hello World", "utf-8", (err) => {
//   if (err) throw err;
//   console.log("File written");
// });

// console.log("This runs first");

// create folder inside folder

// fs.mkdir("uploads",(err) => {
// if (err)throw err;
// });

// fs.readdir("uploads",(err, files) => {
// console.log(files);
// });

  //  Renaming / Moving Files
// fs.rename("note.txt","new.txt",(err) => {
// if (err)throw err;
// });


