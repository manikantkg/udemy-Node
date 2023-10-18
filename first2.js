const fs = require('fs');

const read = fs.readFileSync('./text/input.txt', 'utf-8')

console.log(read)


const text=`THis is the: ${read}`;

fs.writeFileSync('./text/output.txt', text)

console.log("writesync file done!!!!")

