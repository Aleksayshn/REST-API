const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const user = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: String,
  },
  { versionKey: false }
);

user.methods.setPassword = function(password){
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

user.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}


const User = model("user", user);

module.exports = User;
