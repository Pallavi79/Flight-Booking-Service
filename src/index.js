const express = require('express');


const {ServerConfig, Queue} = require('./config');
const apiRoutes = require('./routes');
const CRON = require('./utils/common/cron-jobs');


const app = express();

//let express know how to read re body . parse the incoming json req body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes);
//app.use('/bookingService/api',apiRoutes);


app.listen(ServerConfig.PORT, async()=>{
    console.log(`Successfully started the server on port ${ServerConfig.PORT}`);
    //Logger.info("Successfully started the server",{});
    CRON();
    await Queue.connectQueue();
    console.log("queue connected");
});

