import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();

const PORT = process.env.PORT || process.env.PORTLOCAL


try {
    mongoose.connect(`${process.env.MONGOREMOTE}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Connected to mongoose successfully")
    })
} catch (error) {
    console.log(error)
}

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors({ origin: "*", credentials: true }))


app.get('/preview', (req, res) => {


    res.json({ msg: "succesfully" })
}
);

app.listen(PORT, () => {
    console.log(`server runnig on port ${PORT}`)
})