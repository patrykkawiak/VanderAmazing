import { useEffect, useState } from 'react';

const ThemeSwitch = (params) => {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		document.body.dataset.theme = theme;
	}, [theme]);

	const themeHandler = (e) => {
		setTheme(e.target.checked ? 'dark' : 'light');
	};

	return (
		<input type='checkbox' onChange={themeHandler} checked={theme === 'dark'} />
	);
};

export default ThemeSwitch;
