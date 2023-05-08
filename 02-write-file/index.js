const fs = require('fs');
const readline = require("readline") 

const readL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function write() {
    readL.question('Ваш текст: (exit чтобы зкончить)  ', (answer) => {
      if(answer === 'exit') {
        console.log('Bye Bye');
        readL.close();
      } else {
        fs.appendFile('./02-write-file/kayal.txt', answer + '\n', function (err) {
          if(err) throw err;
          write();
        });
      }
    });
  }
write();
