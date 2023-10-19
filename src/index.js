const express = require('express');
const {ServerConfig, Logger} = require('./config');
const apiRoutes = require('./routes');

const app = express();

//let express know how to read re body . parse the incoming json req body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully started the server on port ${ServerConfig.PORT}`);
    //Logger.info("Successfully started the server",{});

});

