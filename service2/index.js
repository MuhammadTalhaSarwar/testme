const express=require('express');
const app=express();
const port=3001;
app.get('/shopping',(req,res)=>{
    res.status(200).send(`Hello World Container nakal ID: ${process.env.HOSTNAME}`);
}); // get request

const server = app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
  
  afterAll((done) => {
    server.close(done);
  });