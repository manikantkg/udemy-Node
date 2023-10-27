//The code is example of synchronous calling or blocking code 
const fs = require('fs');
/* 
const read = fs.readFileSync('./text/input.txt', 'utf-8')

console.log(read)


const text=`THis is the: ${read}`;

fs.writeFileSync('./text/output.txt', text)

console.log("writesync file done!!!!") */

//Asynchronous code or non-blocking code

fs.readFile('./text/startt.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('Errror 🤔🤔🤔🤔')
    console.log(data1);
    fs.readFile(`./text/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log("data 2 is >>>>>>>>>>>>>>>", data2);
        fs.readFile(`./text/output.txt`, 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./text/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
                console.log("Final file Created Successfully 👌")
            });
        });
    });
});
console.log("files read  😂   🌈 ");
