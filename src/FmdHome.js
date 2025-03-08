import React, { useState } from 'react';
import './FmdHome.css'; // Make sure you have the correct CSS path

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send username and password to a server
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <main>
      <div className="logo-container">
        <img className="logo" src="css/imgs/fmd-logo.png" alt="fmd-logo" />
      </div>

      <div className="admin-log-in">
        <form onSubmit={handleSubmit}>
          <div className="admin-log-box">
            <label className="logtext" htmlFor="uname">Log in</label>
            <input
              className="uname-in"
              type="text"
              placeholder="Username"
              name="uname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <div className="password-container">
              <input
                className="passw-in"
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                name="passw"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" id="showPassword" onClick={handlePasswordToggle}>
                <img src="css/imgs/icons8-show-100.png" alt="show password" />
              </button>
            </div>

            <button className="sub-butt" type="submit">Log In</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
