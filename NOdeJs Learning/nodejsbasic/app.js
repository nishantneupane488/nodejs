                                 // first learning: learns to take input and give output


// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("please enter you name: ", (name)=> {
//     console.log("you entered",name)
//     rl.close();
// })
// rl.on('close', ()=>{
//     console.log('Close Enterface');
//     process.exit(0);
// })



                                     //  second learning : Learning to read and write in file


// const readline = require('readline');
// const fs = require('fs');
// const { time } = require('console');

// const text = fs.readFileSync('./files/input.txt', 'utf-8');
// console.log(text);
// let data = `data read from input.txt: ${text} \nDate of generated: ${new Date()}`;
// fs.writeFileSync('./files/output.txt', data );



                                // SYNCRONOUS AND ASYNCRONOUS CODE

//the upper lines of code is SUNCRONOUS CODE which runs one by one

// now fro ASYNCRONOUS CODE
// const readline = require('readline');
// const fs = require('fs');
// fs.readFile('./files/input.txt', 'utf-8',(err, data)=>{   //this will be working in background 
//     console.log(data);
// })
// console.log('reading files.....')



                                      // READ AND WIRTE ACYNCRONOUSLY

// const fs = require('fs');
// fs.readFile('./files/input.txt', 'utf-8',(err, data)=>{   //this will be working in background 
//     console.log(data);
//     fs.readFile(`./files/${data}.txt`, 'utf-8',(err1,data2)=>{
//         console.log(data2);
//         fs.readFile('./files/append.txt', 'utf-8',(error2, data3)=>{
//             console.log(data3);
//             fs.writeFile('./files/output.txt', `${data2}\n\n${data3}\n\n'Date of creation: ${new Date()}`,()=>{
//                 console.log("file written sucessfully")
//             })
//         })
//     })
// })
// console.log('reading files.....')

// fs.writeFile('./files/output.txt','hello',()=>{

// });


                                  //AWAIT AND SYNC need to be study from outside










                        //CREATE A SIMPLE WEB SERVER

                        const fs = require('fs');
const html =fs.readFileSync('./Templet/index.html','utf-8')
                        
const http = require('http');

//                           // CREATE SERVER
const server = http.createServer((request, response)=>{
    response.end(html)

    console.log('New req reciexe')
    // console.log(response);
})

                         // START A SERVER

server.listen(8000, '127.0.0.1',()=>{
    console.log('Server started')
})


                          //HOW WEB WORKS
//https://www.youtube.com/watch?v=yPTOnLGnbEc&list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS&index=9



