const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticate = (req, res, next)=>{
    try {
        let token = req.headers.authorization;
        if (!token) {
          return res.status(401).json({ message: "Unauthorized" });
        }
    
        token = token.split(" ")[1];
    
        jwt.verify(token, "secret-key", async (err, decoded) => {
          if (err) {
            return res.status(400).json({ message: err.message });
          }
          const user = await User.findById(decoded._id);
          if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
          }
          req.user = user
          next()
        });
      } catch (e) {
        return res.status(400).json({ message: "Invalid Token" });
      }

}

module.exports = authenticate