import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    // Show characters for 100 milliseconds
    setShowPassword(true);
    setTimeout(() => {
      setShowPassword(false);
    }, 100);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label>
        Password:
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => handleInputChange(e)}
        />
      </label>

      <br />
      <button onClick={handleShowPassword}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
      <div className='loader'></div>
    </div>
  );
};

export default PasswordInput;