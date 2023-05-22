require('dotenv').config();
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import userRouter from './routers/user.router';

const app: express.Application = express()
const port: number = 8080;

app.use(bodyParser.json())
app.use(cors());

app.use('/user', userRouter)

app.listen(port, function () {
    console.log(`starting app on ------> http://localhost:${port}`)
})

export default app;