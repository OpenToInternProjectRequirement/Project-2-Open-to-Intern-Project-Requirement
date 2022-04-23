
const jwt = require("jsonwebtoken")

const authenticationMw = function(req,res,next ) {

    let token = req.headers["x-Auth-token"];
      if (!token) token = req.headers["x-auth-token"];
    
      if (!token) return res.send({ status: false, msg: "token must be present" });
    
      console.log(token);
       
      next()
      let decodedToken = jwt.verify(token, "Jolly-LLB");
      if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" })
}

module.exports.authenticationMw = authenticationMw