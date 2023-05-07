const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = async(req,res,next)=>{
try {
    

    //REad token off cookies
      const token = req.cookies.Authorization

    // decode the token
    const decoded = jwt.verify(token, process.env.SECRET)
if(Date.now() > decoded.expires) return res.sendStatus(401)
    // find user using decoded  sub
  const user = await User.findById(decoded.sub)
  if(!user) res.status(401)

    // attch user to req
  req.user = user

    // continue

    next()
} catch (error) {
    return res.sendStatus(401)
}

}

module.exports = requireAuth