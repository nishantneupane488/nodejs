
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})  // all should come accordingly
const app =require('./app');
   //             CREATE A SERVER

//    console.log(app.get('env'))   //ENVIRONMENT VARIABLE
console.log(process.env)

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log('server started')
})