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
     const fs = require('fs');
     const morgan = require('morgan')
     let app = express();
     const data = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));
     const logger = function(req,res,next){
        console.log('Costum middleware triggered')              //COSTUM MIDDLEWARES
        next();
     }
     app.use(express.json());   // MIDDLE WARE 
     app.use(morgan('dev'));
     app.use(logger);
     app.use((req,res,next)=>{
        req.requestedAt = new Date().toISOString();
        next();
     });
     




const getAllMovie =(req,res)=>{           //API TO HANDLE GET REQUEST ON THE ENDPOINT ./DATA/MOVIES   IN REALTIME WE USE DATABASE
        res.status(200).json({
            status: 'sucess',
            requestedAt: req.requestedAt,
            count: data.length,
            data:{
                movies : data
            }
        })
    }

    // ROUTE HANDLER FUNCTION
const getMovie = (req,res)=>{           //ROUTE PARAMETER
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
         
         
     }
    
const createMovie = (req,res)=>{           //API TO HANDLE GET REQUEST ON THE ENDPOINT ./DATA/MOVIES   IN REALTIME WE USE DATABASE
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
   }
const UpdateMovie = (req,res)=>{
    let id = req.params.id*1;
    let movieToUpdate=data.find(el => el.id===id);
    if(!movieToUpdate){
        return res.status(404).json({
            status: 'Failed',
            message: 'Movies with id '+id+' is not found'
        })
     };
    let index = data.indexOf(movieToUpdate)


    Object.assign(movieToUpdate,req.body);
   data[index] = movieToUpdate;
  
   fs.writeFile('./data/movies.json',JSON.stringify(data),(err)=>{
    res.status(200).json({
             status:'Updated',
             data:{
                 movie : movieToUpdate
             }
         })
   })
 }
 const deleteMovie= (req, res) => {
    const id = req.params.id*1;
    const movieToDelete = data.find(el=>el.id===id);
    if(!movieToDelete){
        return res.status(404).json({
            status: 'Failed',
            message: 'Movies with id '+id+' is not found to delete'
        })
     };
    const index= data.indexOf(movieToDelete)
    data.splice(index,1);
    fs.writeFile('./data/movies.json',JSON.stringify(data),(err)=>{
        res.status(204).json({
                 status:'Updated',
                 data:{
                     movie : null
                 }
             })
       })
}
     // //                GET - API/V1/MOVIES/ID
     
    //  app.get('/api/v1/movies',getAllMovie)
    //  app.get('/api/v1/movies/:id',getMovie)
    //  //                POST - API/V1/MOVIES                  //BOTH LOWERCODE AND THIS CODE IS SAME
    //  app.post('/api/v1/movies',createMovie);
    //  // USING PATCH METHOD TO UPDATE DATA
    //  app.patch('/api/v1/movies/:id',UpdateMovie);
    //  app.delete('/api/v1/movies/:id',deleteMovie);

    
    //  app.route('/api/v1/movies')
    //  .get(getAllMovie)
    //  .post(createMovie)

    // app.route('/api/v1/movies/:id')
    // .get(getMovie)
    // .patch(UpdateMovie)
    // .delete(deleteMovie)

    const moviesRouter = express.Router();
    moviesRouter.route('/')
     .get(getAllMovie)
     .post(createMovie)

     moviesRouter.route('/:id')
    .get(getMovie)
    .patch(UpdateMovie)
    .delete(deleteMovie)

    app.use('/api/v1/movies',moviesRouter)        //MOUNTING ROUTES (MEANS USE OF MIDDLEWARE FOR CERTAIN PART)
         // res.send('created')
     //             CREATE A SERVER
     const port = 3000;
     app.listen(port,()=>{
         console.log('server started')
     })



