const path = require("path");
const fs = require("fs");
require('colors');
fs.readdir("03-files-in-folder/secret-folder", (error, fileNames) =>{
    if (error){
        console.log("Error");
    }else{
        const text ='Ваши файлы:'
        console.log(text.red);
        fileNames.forEach(elements => {
            const without = path.parse(elements)
            const filePath = path.join("03-files-in-folder/secret-folder", elements);
            fs.stat(filePath, (err, stats) => {
                console.log(without.name.blue +' - '+ without.ext.green +' - '+ stats.size +' b');   
             });
        });
    }
})
