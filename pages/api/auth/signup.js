import dbConnect from '../../../server/db';

import User from '../../../server/model/userModel';

dbConnect();

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = new User(req.body);
    const resUser = await user.save();

    // if (resUser) res.status(200).json(user);
    res.status(200).json(user);
    // else res.status(201).json({ error: 'error' });
  } catch (error) {
    res.status(201).json({ error: error.message });
  }
};

const Signup = async (req, res) => {
  if (req.method == 'GET')
    res.status(404).json({ error: 'signup api not found' });
  if (req.method == 'POST') {
    createUser(req, res);
  }
};

export default Signup;
