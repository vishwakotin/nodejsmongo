const mongoose = require("mongoose");

const userdashboard = async (req, res) => {
  console.log("hellow from user dashboard");

  const userModel = mongoose.model("users");

  const getUser = await userModel.findOne({
    _id: req.user._id,
  });
  //    .select("name email balance");

  console.log(req.user);

  console.log(getUser);

  res.status(200).json({
    status: "success",
    data: getUser,
  });
};

module.exports = userdashboard;
