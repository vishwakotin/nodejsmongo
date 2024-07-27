const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const registers = async (req, res) => {
  console.log("you are in register");
  console.log(req.body);

  const userModel = mongoose.model("users");

  const { name, email, password, balance } = req.body;

  if (!email) throw "email must be provided!";
  if (!password) throw "passowrd must be provides!";

  if (password.length < 5)
    throw "Password length must be more that 5 charecters!";

  if (!name) throw "name is required!";

  const Duplicate = await userModel.findOne({
    email: email,
  });

  if (Duplicate) throw "User is already registered!";

  const hashedpassword = await bcrypt.hash(password, 2);

  console.log(name);
  console.log(email);
  console.log(hashedpassword);
  console.log(balance);

  console.log("afer user Model");

  await userModel.create({
    name: name,
    email: email,
    password: hashedpassword,
    balance: balance,
  });

  console.log("afer create");

  res.status(200).json({
    status: "User registered successfully!",
  });
};

module.exports = registers;
