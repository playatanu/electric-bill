import dbConnect from '../../../server/db';
import User from '../../../server/model/userModel';

dbConnect();

const getUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findById(req.body.id);

    console.log(user);
    if (user.password == req.body.password) res.status(200).json(user);
    else res.status(201).json({ error: 'error' });
  } catch (error) {
    res.status(201).json({ error: error });
  }
};

const Login = async (req, res) => {
  if (req.method == 'GET')
    res.status(404).json({ error: 'login api not found' });
  if (req.method == 'POST') {
    getUser(req, res);
  }
};

export default Login;
