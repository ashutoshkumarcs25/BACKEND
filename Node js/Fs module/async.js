const fs = require("fs");
const path = require('path');


const fileName = "test.txt";
const filePath= path.join(__dirname,fileName);
// console.log(__dirname);
 


//   Write operation 

//  fs.writeFile(filePath, "this is inital data ","utf-8",(err)=>{
//     if(err) 
//         console.error(err);
//     else
//         console.log("File has been saved");

//     });

// Read operation 

// fs.readFile(filePath,"utf-8",(err,data) =>{
//     if(err) console.error(err);
//     else console.log(data);
// });



//  Append file / Update file 


//  fs.appendFile(filePath, "\n this is  updated  data ","utf-8",(err)=>{
//     if(err) 
//         console.error(err);
//     else
//         console.log("File has been updated");

//     });


// Delete file / Unlink file 

fs.unlink(filePath, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File has been deleted");
    }
});
 

