import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRouter from "./routers/userRouter.js";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";

const app = express();
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true});
mongoose.connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    //res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
    res.send("Hello");
});

app.use((err,req,res,next) =>{
    res.status(500).send({message: err.message});
})

if(process.env.NODE_ENV === "production"){
  app.use(express.static('frontend/build'));
}

let port = process.env.PORT||5000;
app.listen(port, function() {
  console.log("Server started on port " +port);
});
