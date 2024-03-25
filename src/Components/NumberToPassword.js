import { useState } from "react";
const NumberToPassword = () => {
  const [type, setType] = useState("number");
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const changeType = () => {
    setType("password");
  };
  const handleFocus = () => {
    setType("number");
  };
  return (
    <div>
      <input
        type={type}
        value={input}
        placeholder="type here"
        onChange={handleChange}
        onBlur={changeType}
        onFocus={handleFocus}
      />
    </div>
  );
};
export default NumberToPassword;
