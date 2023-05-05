const express =require('express')
const moviesCOntroller = require('./../controllers/moviesController')

const router = express.Router();

router.param('id',moviesCOntroller.checkId)

router.route('/')
 .get(moviesCOntroller.getAllMovie)
 .post(moviesCOntroller.validatebody, moviesCOntroller.createMovie)  //CHAINING MIDDLE WERE

 router.route('/:id')
.get(moviesCOntroller.getMovie)
.patch(moviesCOntroller.UpdateMovie)
.delete(moviesCOntroller.deleteMovie)
module.exports = router;




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