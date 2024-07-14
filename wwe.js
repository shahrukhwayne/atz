const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000
app.get('/',(req,res)=>
{
    res.send('Hello srk heroku');
})
app.listen(PORT,(err,res)=>
{
    if(err) throw err;
    console.log(`Server is running on port ${PORT}`);
})