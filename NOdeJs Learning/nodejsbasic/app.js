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

//                         const fs = require('fs');
// const html =fs.readFileSync('./Templet/index.html','utf-8')
                        
// const http = require('http');

// //                           // CREATE SERVER
// const server = http.createServer((request, response)=>{
//     response.end(html)

//     console.log('New req reciexe')
//     // console.log(response);
// })

//                          // START A SERVER

// server.listen(8000, '127.0.0.1',()=>{
//     console.log('Server started')
// })


                          //HOW WEB WORKS
//https://www.youtube.com/watch?v=yPTOnLGnbEc&list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS&index=9






                        //ROUTING
// https://www.youtube.com/watch?v=nDl4vBYy0NE&list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS&index=11



                        //iMPLEMENTING ROUTING
// const fs = require('fs');
// const html =fs.readFileSync('./Templet/index.html','utf-8')
                        
// const http = require('http');

// //                           // CREATE SERVER
// const server = http.createServer((request, response)=>{
// const path = request.url;
// if(path==='/' || path.toLocaleLowerCase() === '/home'){
//     response.end('You are in home page');

// }
// else if( path.toLocaleLowerCase() === '/about'){
//     response.end("you are in about page")
// }
// else if( path.toLocaleLowerCase() === '/contact'){
//     response.end("you are in contact page")
// }
// else{
//     response.end('Error 404: page not found' )
// }

// })

//                          // START A SERVER

// server.listen(8000, '127.0.0.1',()=>{
//     console.log('Server started')
// })


                                //SENDING HTML RESPONCE TO THE SERVER
// const fs = require('fs');
// const html =fs.readFileSync('./Templet/index.html','utf-8')

                        
// const http = require('http');

// //                           // CREATE SERVER
// const server = http.createServer((request, response)=>{
// const path = request.url;
// if(path==='/' || path.toLocaleLowerCase() === '/home'){
//     response.end(html.replace('{{%CONTENTS%}}','You are in home page'));

// }
// else if( path.toLocaleLowerCase() === '/about'){
//     response.end(html.replace('{{%CONTENTS%}}','You are in about page'))
// }
// else if( path.toLocaleLowerCase() === '/contact'){
//     response.end(html.replace('{{%CONTENTS%}}','You are in contact page'))
// }
// else{
//     response.end(html.replace('{{%CONTENTS%}}','ERROR 404: Page not found'))
// }

// })

//                             // START A SERVER

// server.listen(8000, '127.0.0.1',()=>{
//     console.log('Server started')
// })



                            //SETTING STATUS CODE FROM 200 TO 404 FOR AN ERROR
// const fs = require('fs');
// const html =fs.readFileSync('./Templet/index.html','utf-8')

                        
// const http = require('http');

// //                           // CREATE SERVER
// const server = http.createServer((request, response)=>{
// const path = request.url;
// if(path==='/' || path.toLocaleLowerCase() === '/home'){
//     response.writeHead(200,{                              //this is main for changing status
//         'Content-Type': ' text/html',
//     });
//     response.end(html.replace('{{%CONTENTS%}}','You are in home page'));

// }
// else if( path.toLocaleLowerCase() === '/about'){
//     response.writeHead(200,{                              //this is main for changing status
//         'Content-Type': ' text/html',
//     });
//     response.end(html.replace('{{%CONTENTS%}}','You are in about page'))
// }
// else if( path.toLocaleLowerCase() === '/contact'){
//     response.writeHead(200,{                              //this is main for changing status
//         'Content-Type': ' text/html',
//     });
//     response.end(html.replace('{{%CONTENTS%}}','You are in contact page'))
// }
// else{
//     response.writeHead(404,{                              //this is main for changing status
//         'Content-Type': ' text/html',
//     });
//     response.end(html.replace('{{%CONTENTS%}}','ERROR 404: Page not found'))
// }

// })

//                             // START A SERVER

// server.listen(8000, '127.0.0.1',()=>{
//     console.log('Server started')
// })



                                //WORKING WITH JSON DATA
// 




                        //TRANSFORMATION OF JSON DATA INTO HTML
const fs = require('fs');
const html =fs.readFileSync('./Templet/index.html','utf-8');

let products =JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));  //Json data into javascript object
let productlisthtml = fs.readFileSync("./Templet/product-list.html",'utf-8');
let productHtmlArray =products.map((prod)=>{
        let output = productlisthtml.replace('{{%NAME%}}', prod.name);
        output = output.replace("{{%IMAGE%}}", prod.productImage);
        output =output.replace("{{%MODELNAME%}}", prod.modeName);
        output =output.replace('{{%MODELNO%}}', prod.modelNumber);
        output =output.replace('{{%SIZE%}}', prod.size);
        output =output.replace('{{%CAMERA%}}', prod.camera);
        output =output.replace('{{%PRICE%}}', prod.price);
        output =output.replace('{{%COLOR%}}', prod.color);
        return output;
});
                        
const http = require('http');

//                           // CREATE SERVER
const server = http.createServer((request, response)=>{
const path = request.url;
if(path==='/' || path.toLocaleLowerCase() === '/home'){
    response.writeHead(200,{                              
        'Content-Type': ' text/html',
    });
    response.end(html.replace('{{%CONTENTS%}}','You are in home page'));

}
else if( path.toLocaleLowerCase() === '/about'){
    response.writeHead(200,{                              //this is main for changing status
        'Content-Type': ' text/html',
    });
    response.end(html.replace('{{%CONTENTS%}}','You are in about page'))
}
else if( path.toLocaleLowerCase() === '/contact'){
    response.writeHead(200,{                              //this is main for changing status
        'Content-Type': ' text/html',
    });
    response.end(html.replace('{{%CONTENTS%}}','You are in contact page'))
}
else if( path.toLocaleLowerCase() === '/product'){
    let productResponceHmtl=html.replace('{{%CONTENTS%}}', productHtmlArray  .join(','));
    response.writeHead(200,{                              
        'Content-Type': ' text/html',
    });
    response.end(productResponceHmtl);
}
        
    
    

else{
    response.writeHead(404,{                              //this is main for changing status
        'Content-Type': ' text/html',
    });
    response.end(html.replace('{{%CONTENTS%}}','ERROR 404: Page not found'))
}

})

                            // START A SERVER

server.listen(8000, '127.0.0.1',()=>{
    console.log('Server started')
})                       