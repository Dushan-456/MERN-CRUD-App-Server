import 'dotenv/config';
import express from 'express';
import dbConnect from './src/db/config.mjs';
import rootRouter from './Routes/index.mjs';




const server = express()
const PORT = process.env.PORT || 5001

server.use(express.json())

//ROUTE CONNECT 
server.use('/api/v1/',rootRouter);

dbConnect.then(()=>{
    console.log("DB Connected...... :)");
    server.listen(PORT,()=>console.log(`Server is running........on port ${PORT}`));
    
})

