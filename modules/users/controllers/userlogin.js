const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const jsonwebtoken = require("jsonwebtoken");

const userlogin = async (req, res) => {
  const userModel = mongoose.model("users");
  console.log("in login");

  const { email, password } = req.body;

  console.log(email);
  console.log(password);

  const getUser = await userModel.findOne({
    email: email,
  });

  if (!getUser) throw "email ID is not in the system";

  console.log(getUser);

  const comparepassword = await bcrypt.compare(password, getUser.password);

  if (!comparepassword) throw "Password does not match";

  const accesstoken = jsonwebtoken.sign(
    {
      _id: getUser._id,
      name: getUser.name,
    },
    "secret-key-123"
  );

    res.status(200).json({
    status: "User logged in successfully!",
    accesstoken: accesstoken,
  });
};

module.exports = userlogin;