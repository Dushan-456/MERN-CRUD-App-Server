import 'dotenv/config';
import express from 'express';
import dbConnect from './src/db/config.mjs';
import rootRouter from './Routes/index.mjs';
import cors from 'cors'


// MONGO_URL = mongodb+srv://dushan:7QDYKoAxSKoRc05J@cluster0.4l8hnzf.mongodb.net/express_learnig_db?retryWrites=true&w=majority&appName=Cluster0

const server = express()
const PORT = process.env.PORT || 5001

server.use(express.json())
server.use(cors());
//ROUTE CONNECT 
server.use('/api/v1/',rootRouter);

dbConnect.then(()=>{
    console.log("DB Connected...... :)");
    server.listen(PORT,()=>console.log(`Server is running........on port ${PORT}`));
    
})

