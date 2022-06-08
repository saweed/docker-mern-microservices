const authorizeUser = (req, res, next) => {
  const {user} = req.session;

  if(!user) {
    return res.status(401).json({
      "status": "fail",
      "message": 'Unauthorzed request'
    });
  }

  next();
}

module.exports = authorizeUser;
