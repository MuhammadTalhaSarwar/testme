const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send(`Hello World Container allla IDs: ${process.env.HOSTNAME}`);
}); // get request
const server = app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
  
  afterAll((done) => {
    server.close(done);
  }); // listen to port 3000
module.exports=server;