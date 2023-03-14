import { useState, useEffect } from "react";

const ThemeSwitcher = () => {

	const [theme, setTheme] = useState('light');

	  useEffect(() => {
      document.documentElement.setAttribute('color-scheme', theme);
    }, [theme]); 

	const sun_icon = "https://img.icons8.com/ios/50/ffffff/sun--v1.png";
	const moon_icon = "https://img.icons8.com/ios/50/000000/moon-symbol.png";

	return (
		<div className="theme-switch" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
			<img src={theme === 'light' ? moon_icon : sun_icon} alt="Theme icon" aria-label="Switch color theme" width="20"/>
			<span>{`${theme === 'light' ? 'Dark' : 'Light'} Theme`}</span>
		</div>
	);
}

export default ThemeSwitcher;