import express from 'express'
const app = express()
import cors from 'cors';
import Bookrouter from './src/books/book.route.js'
import 'dotenv/config'
import mongoose from 'mongoose'
const port = 3000 || process.env.PORT

app.use(express.json());
// app.use(cors({
//     origin: ['http://localhost:5173'],
//     credentials: true
// }))

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}
));

import orderRoutes from "./src/orders/order.route.js"
import userRouter from './src/users/user.route.js';
import adminrouter from './src/stats/admin.stats.js';

app.use("/api/books", Bookrouter);
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRouter);
app.use("/api/admin", adminrouter)

async function main() {
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log('Connected!'));

    app.use('/', (req, res) => {
        res.send('Hello World!')
    })
}

main().then(()=>console.log("connected")).catch(error => console.error(error));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})