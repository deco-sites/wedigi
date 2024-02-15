import { h } from 'preact';
import { useState } from 'preact/hooks';

import Icon from "$store/components/ui/Icon.tsx";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark', !isDarkMode);
  }

  return (
    <button onClick={toggleTheme}>
      { 
        isDarkMode ? 
        <Icon id="Moon" width={24} height={24} />
        : 
        <Icon id="Sun" width={24} height={24} />
      }
    </button>
  );
}

export default ThemeToggle;