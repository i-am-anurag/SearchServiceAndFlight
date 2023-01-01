const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const db = require('./models/index');
// const {Airplane} = require('./models/index');

const setupAndCreateServer = async()=> {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        console.log(`listening on port${PORT}`);

        if(process.env.SYNC_DB)
        {
            db.sequelize.sync({alter: true});
        }
        
        // if we want to create using interface
        // await Airplane.create(
        //     {
        //         modelNumber: 'Douglas DC-3'
        //     });
    });
}

setupAndCreateServer();