//  Importing the required modules
import express from 'express';
import dotenv from 'dotenv';
import executeRouter from './routes/executeRoute.js';

//  setup
dotenv.config({
    path: './config.env'
});
const app = express();

//  middlewares
app.use(express.json());
app.use('/execute', executeRouter);

app.get('/health', async (req,res) => {
    res.status(200).send();
})

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER STARTED AT ${process.env.PORT}`);
});