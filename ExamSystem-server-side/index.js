const express = require('express')
const app = express();
const port = 3000;
require('express-async-errors');
const doctorRouter = require('./Routes/Doctor');
const studentRouter = require('./Routes/Student');

app.use(express.json());

app.use('/doctor',doctorRouter);
app.use('/student',studentRouter);

app.use((err,req,res,next)=>{
  err.statusCode=err.statusCode|| 500;
  const handleError=err.statusCode<500 ? err.message :'Something Went Wrong';
  res.status(err.statusCode).json({
    message:handleError,
    errors:err.errors || {}
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})