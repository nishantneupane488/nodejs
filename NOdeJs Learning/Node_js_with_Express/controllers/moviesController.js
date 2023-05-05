const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data/movies.json', 'utf-8'));

exports.checkId = (req,res,next,value)=>{
    console.log('Movie id is '+value)
    let movie=data.find(el => el.id===value*1);
    if(!movie){//USING MIS=DDLEWARE FUNCTION BUT ALSO WORK IN NORMAL FUNCTION
        return res.status(404).json({
            status: 'Failed',
            message: 'Movies with id '+value+' is not found'
        })
    };
    next();
}

exports.validatebody = (req,res,next)=>{
    if(!req.body.name || !req.body.releaseYear){
        return res.status(404).json({
            Status : 'Error',
            message: 'Not a valid movie data '
        })
    }
    next()
}

exports.getAllMovie =(req,res)=>{           //API TO HANDLE GET REQUEST ON THE ENDPOINT ./DATA/MOVIES   IN REALTIME WE USE DATABASE
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
exports.getMovie = (req,res)=>{           //ROUTE PARAMETER
    //  console.log(req.params);
     const id = req.params.id * 1

    let datas =  data.find(el=>
        el.id === id
     )
    //  if( !datas){

    //    return  res.status(404).json({
    //         status: 'Failed',
    //         message: 'Movies with id '+id+' is not found'
    //     })
        
    //  }
     res.status(200).json({
        status: 'sucess',
        data:{
            datas:datas
        }
     })
     
 }
 exports.createMovie = (req,res)=>{           //API TO HANDLE GET REQUEST ON THE ENDPOINT ./DATA/MOVIES   IN REALTIME WE USE DATABASE
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
exports.UpdateMovie = (req,res)=>{
let id = req.params.id*1;
let movieToUpdate=data.find(el => el.id===id);
// if(!movieToUpdate){
//     return res.status(404).json({
//         status: 'Failed',
//         message: 'Movies with id '+id+' is not found'
//     })
//  };
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
exports.deleteMovie = (req, res) => {
const id = req.params.id*1;
const movieToDelete = data.find(el=>el.id===id);
// if(!movieToDelete){
//     return res.status(404).json({
//         status: 'Failed',
//         message: 'Movies with id '+id+' is not found to delete'
//     })
//  };
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
};

