import express from "express"
import { PORT,mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoutes.js"
import cors from "cors";

const app = express();

//middleware for parsing request body
app.use(express.json())

// Middleware for handling cors poilcy
//Method1: Allow all origins with default of cors(*)
app.use(cors())
// Method2: Allow custom origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get('/', (req,res)=>{
    console.log(req);
    return res.status(234).send('Welome To MERN Stack Tutorial')
});

app.use('/books', booksRoute)

mongoose.connect(mongoDB_URL)
.then(() => {
    console.log('App connected to database')
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`);
    });
}).catch((err) => {
    console.log(err)
});