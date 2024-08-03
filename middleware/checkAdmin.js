
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const checkAdmin = async (req, res, next) => {
  const auth = req.header('Authorization');
  if (!auth) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }

  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await UserModel.findById(decoded.id);
    console.log(user)
    if (!user || !user.isAdmin()) {
      return res.status(403).send({ error: 'Access denied. Admins only.' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).send({ error: 'Invalid token.' });
  }
};

module.exports = checkAdmin;