const isUserAuthorize = (...roles) => {
  return (req, res, next) => {
    // console.log(req.user.userRole,"req.user.role",roles)
    if (!roles.includes(req.user.userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }
    
    next();
  };
};


module.exports = {isUserAuthorize};