import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import userRouter from "./routes/users.js"

const app = express()
dotenv.config()

if(!process.env.port && !process.env.dburl) {
    process.exit(1);
}

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: process.env.origin}));
app.use("/", userRouter);

app.listen(process.env.port , () => {
    console.log(`server run on port ${process.env.port}`);
});

mongoose.set("strict", false);
mongoose.connect(process.env.dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connected on url ${process.env.dburl}`);
}).catch((err) => console.log(err.message));