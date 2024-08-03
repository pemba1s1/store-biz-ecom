const UserRole = require("../constants/userRole");
const UserModel = require("../models/user");

const AdminLogin = async (req,res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }
  const admin = await UserModel.findOne({ username, role: UserRole.Admin });
  if (!admin) {
    return res.status(404).send('Admin not found');
  }
  const isMatch = await admin.comparePassword(password);
  if (!isMatch) {
    return res.status(400).send('Invalid credentials');
  }
  const token = admin.generateAuthToken();
  return res.status(200).send({ token });
}

module.exports = { AdminLogin };
