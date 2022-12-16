const express = require('express');

const app = require('body-parser');

const {PORT} = require('./config/serverConfig');
const setupAndCreateServer = async()=> 
{
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({exteded: true}));

    app.listen(PORT,()=>{
        console.log(`listening on port${PORT}`);
    });
}

setupAndCreateServer();