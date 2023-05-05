// //             IMPORT EXPRESS PACKAGE

// const express =require('express')
// let app = express();
// //        ROUTE = ATTP METHOD + URL
// app.get('/',(req,res)=>{
// // res.status(200).send('<h4>Hello World</h4>')  // text and html
// res.status(200).json({message: 'Hello world', status : 200}) 
// })
// //                 FOR POST REQUEST

// app.post('/',()=>{
//     res.status(200).send('hello world')
// })



// //             CREATE A SERVER
// const port = 3000;
// app.listen(port,()=>{
//     console.log('server started')
// })





//                                  CREATING AN API
//                                      API
//             IMPORT EXPRESS PACKAGE

// const express =require('express')
// const fs = require('fs')
// let app = express();
// const data = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));
// app.use(express.json())   // MIDDLE WARE 

// // //                GET - API/V1/MOVIES


// app.get('/api/v1/movies',(req,res)=>{           //API TO HANDLE GET REQUEST ON THE ENDPOINT ./DATA/MOVIES   IN REALTIME WE USE DATABASE
//     res.status(200).json({
//         status: 'sucess',
//         count: data.length,
//         data:{
//             movies : data
//         }
//     })
// })


// //                POST - API/V1/MOVIES


// app.post('/api/v1/movies',(req,res)=>{           //API TO HANDLE GET REQUEST ON THE ENDPOINT ./DATA/MOVIES   IN REALTIME WE USE DATABASE
//     // console.log(req.body)
//     const newId = data[data.length -1].id + 1

//     const newData = Object.assign({id: newId},req.body)



//     data.push(newData)

//     fs.writeFile('./data/movies.json',JSON.stringify(data),(err)=>{
//         res.status(201).json({
//             status:'Sucess',
//             data:{
//                 data: newData
//             }
//         })
//     })




//     // res.send('created')
// })



// //             CREATE A SERVER
// const port = 3000;
// app.listen(port,()=>{
//     console.log('server started')
// })



     //                     ROUTE PARAMATER 
               
     const express =require('express')
     const fs = require('fs')
     let app = express();
     const data = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));
     app.use(express.json())   // MIDDLE WARE 
     
     // //                GET - API/V1/MOVIES/ID
     
     
     app.get('/api/v1/movies/:id',(req,res)=>{           //ROUTE PARAMETER
        //  console.log(req.params);
         const id = req.params.id * 1

        let datas =  data.find(el=>
            el.id === id
         )
         if( datas){
            res.status(200).json({
                status: 'sucess',
                data:{
                    datas:datas
                }
             })
         }else{
            res.status(404).json({
                status: 'Failed',
                message: 'Movies with id '+id+' is not found'
            })
         }
         
         
     })
     
     
     //                POST - API/V1/MOVIES
     
     
     app.post('/api/v1/movies',(req,res)=>{           //API TO HANDLE GET REQUEST ON THE ENDPOINT ./DATA/MOVIES   IN REALTIME WE USE DATABASE
         // console.log(req.body)
         const newId = data[data.length -1].id + 1
     
         const newData = Object.assign({id: newId},req.body)
     
        
     
         data.push(newData)
     
         fs.writeFile('./data/movies.json',JSON.stringify(data),(err)=>{
             res.status(201).json({
                 status:'Sucess',
                 data:{
                     data: newData
                 }
             })
         })
     
     
     
     
         // res.send('created')
     })
     
     
     
     //             CREATE A SERVER
     const port = 3000;
     app.listen(port,()=>{
         console.log('server started')
     })



