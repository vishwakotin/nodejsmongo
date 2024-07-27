const jasonwebtoken = require("jsonwebtoken");

const auth = (req, res, next) => {
  console.log("Hello from middleware");

  console.log(req.headers);

  const authtoken = req.headers.authorization.replace("Bearer ", "");

  console.log(authtoken);

  try {
    const jwtverif = jasonwebtoken.verify(authtoken, "secret-key-123");
    req.user = jwtverif;
  } catch (e) {
    res.status(401).json({
      status: "failed",
      message: "Unauthorized",
    });
    return;
  }

  next();
};

module.exports = auth;
