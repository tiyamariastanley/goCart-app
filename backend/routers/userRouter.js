import express from "express";
import data from "../data.js";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import {generateToken} from "../utils.js";

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) =>{
    console.log("inside seed");
    //await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    console.log(data.users);
    res.send({createdUsers});
  }));

userRouter.post('/signin', expressAsyncHandler(async (req, res) =>{
    console.log("inside signin");
    User.findOne({email: req.body.email},(err,foundUser) =>{
      if(foundUser)
      {
        if(bcrypt.compareSync(req.body.password,foundUser.password)){
          console.log("Login Successfull");
          res.send({
            _id: foundUser._id,
            name: foundUser.name,
            email: foundUser.email,
            isAdmin: foundUser.isAdmin,
            token: generateToken(foundUser)
          });
        } else{
          console.log("Incorrect Password");
          res.status(401).send({ message: 'Invalid email or password' });
        }
      }else{
          console.log("User not found...Please register");
          res.status(401).send({ message: 'Invalid email or password' });
      }
  })
}));

userRouter.post('/register',expressAsyncHandler(async(req,res) => {
  console.log("inside register");
  const newUser = new User({
    name : req.body.name,
    email : req.body.email,
    password : bcrypt.hashSync(req.body.password,8)
  });

  console.log(newUser);
  newUser.save((err,result) =>{
    if (err) {
      console.log(err);
    } else {
      console.log("new user added");
      res.send({
        _id: result._id,
        name: result.name,
        email: result.email,
        isAdmin: result.isAdmin,
        token: generateToken(result)
      });
    }
  });
}))



export default userRouter;