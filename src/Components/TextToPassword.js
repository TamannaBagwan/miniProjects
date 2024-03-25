import React, { useState, useEffect } from 'react';
const TextToPassword = () => {
  const [input, setInput] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    setIsPassword(false);
  };

  useEffect(() => {
   
    const timerId = setTimeout(() => {
      setIsPassword(true);
    }, 1000);
  
    return () => clearTimeout(timerId);
  }, [input]);

  return (
<div>
    <input
    style={{margin:'20px'}}
      type={isPassword ? 'password' : 'text'}
      placeholder="Type a text"
      value={input}
      onChange={handleChange}
    />

</div>
  );
};

export default TextToPassword;

