
import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import "../assets/dark-mode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  const handleSwitchToggle = (checked) => {
    setIsDarkMode(checked);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="center-container">
      <div className="nav dark-mode">
        <Switch
          onChange={handleSwitchToggle}
          checked={isDarkMode}
          offColor="#000"
          offHandleColor="#fff"
          height={24}
          width={48}
          checkedIcon={false}
          uncheckedIcon={false}
          uncheckedHandleIcon={
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "transparent",
              }}
            ></div>
          }
          checkedHandleIcon={
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "transparent",
              }}
            ></div>
          }
          id="my-switch"
        />
      </div>
      <div className="content">
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      </div>
    </div>
  );
};

export default DarkMode;
