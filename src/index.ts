import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";

createConnection().then(async connection => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    const monhocRoute = require('./routers/monhocRoute')
    const userRoute = require('./routers/userRoute')
    app.use("/monhoc", monhocRoute);
    app.use("/user",userRoute)
    // run app
    app.listen(3000);
    
    console.log("Express application is up and running on port 3000");
}).catch(error => console.log(error));
