fs.promises.readFile(filePath, "utf-8")
.then((data) =>console.log(data))
.catch((err)  => console.log("Error encoding file",err));