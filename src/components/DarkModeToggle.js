import React from 'react';

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`} onClick={onToggle}>
      <span className="toggle-ball" />
    </button>
  );
};

export default DarkModeToggle;
