const express = require('express');

const {PORT} = require('./config/serverConfig');
const setupAndCreateServer = async()=> 
{
    const app = express();
    app.listen(PORT,()=>{
        console.log(`listening on port${PORT}`);
    });
}

setupAndCreateServer();