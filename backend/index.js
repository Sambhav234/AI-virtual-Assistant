import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();

const port=process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);


app.listen(port, () => {
  connectDb();
  console.log("Listening on port : ",port);
});

app.get("/", (req,res) => {
    res.send("Welcome to server")
});
