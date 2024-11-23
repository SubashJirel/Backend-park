const jwt = require("jsonwebtoken");

const authMiddleware = (role) => (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    if (role && decoded.role !== role)
      return res.status(403).json({ message: "Access denied: Insufficient permissions" });

    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
