import react, { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const loginUser = () => {
    axios
      .post('/api/auth/signup', user)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(user);
  };

  return (
    <>
      <input
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      {/* <input
        placeholder="ID"
        onChange={(e) => setUser({ ...user, id: e.target.value })}
      /> */}
      <input
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <div onClick={loginUser}>Signup</div>
    </>
  );
};

export default Login;
