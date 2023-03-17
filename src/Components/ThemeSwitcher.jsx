import { useState, useEffect } from "react";

import getColor from "../Helpers/getColor";

const ThemeSwitcher = (props) => {

	const [theme, setTheme] = useState('light');

	  useEffect(() => {
      document.documentElement.setAttribute('color-scheme', theme);
    }, [theme]); 

	const sun_icon = `https://img.icons8.com/ios/50/${getColor('--text-' + theme)}/sun--v1.png`;
	const moon_icon = `https://img.icons8.com/ios/50/${getColor('--text-' + theme)}/moon-symbol.png`;
	
	return (
		<>
			<div className="theme-switch" onClick={() => {
					const newTheme = theme === 'light' ? 'dark' : 'light';
					setTheme(newTheme);
					props.changeTheme(newTheme);
				}}>
				<img src={theme === 'light' ? moon_icon : sun_icon} alt="Theme icon" aria-label="Switch color theme" width="20"/>
				<span>{`${theme === 'light' ? 'Dark' : 'Light'} Theme`}</span>
			</div>
			<div className='float-break'></div>
		</>
	);
}

export default ThemeSwitcher;