const jwt = require("jsonwebtoken");
exports.yeuCauDangNhap = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } else {
    return res.status(400).json({ message: "Cần đăng nhập" });
  }
  next();
  // jwt.decode()
};

exports.userMiddleWare = (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "Yêu cầu người dùng bị từ chối" });
  }
  next();
};

exports.adminMiddleWare = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({ message: "Yêu cầu admin bị từ chối" });
  }
  next();
};
