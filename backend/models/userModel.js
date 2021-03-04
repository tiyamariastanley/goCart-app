import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type: String ,required: true},
  email: {type: String, require: true,unique: true},
  password: {type: String, require: true},
  isAdmin: {type: Boolean, default: false},
},
  {timestamps : true}
);

const User = mongoose.model('User', userSchema);
export default User;
