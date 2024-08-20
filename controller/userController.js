
const UserModel = require("../models/user");

const UserLogin = async (req,res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }
  const user = await UserModel.findOne({ username });
  if (!user) {
    return res.status(404).send('User not found');
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).send('Invalid credentials');
  }
  const token = user.generateAuthToken();
  return res.status(200).send({ 
    user: { _id: user._id, username: user.username, email: user.email }, 
    token 
  });
}

const RegisterUser = async (req,res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).send('Username, password and email are required');
  }
  try {
    const user = new UserModel({ username, password, email });
    await user.save();
    const token = user.generateAuthToken();
    return res.status(200).send({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send('Internal server error');
  }
}

module.exports = { UserLogin, RegisterUser };
