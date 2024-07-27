const errorhandler = (error, req, res, next) => {

  if (error) {
    console.log(error);
    res.status(400).json({
      status: "failed",
      Error: error,
    });
  } else {
    next();
  }
};

module.exports = errorhandler;
