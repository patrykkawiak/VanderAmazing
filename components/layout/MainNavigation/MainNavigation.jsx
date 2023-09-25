import Link from 'next/link';
import classes from './MainNavigation.module.scss';
import Burger from '@/components/UI/BurgerBtn/Burger';
import { useState } from 'react';
import Button from '@/components/UI/Button/Button';
import ThemeSwitch from '@/components/UI/ThemeSwitch/ThemeSwitch';

const MainNavigation = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNavHandler = () => {
		setIsNavOpen((prev) => !prev);
	};

	return (
		<nav className={classes.nav}>
			<div className='wrapper'>
				<div className={classes['nav-ctn']}>
					<Link href={'/'} className={classes['nav-logo']}>
						Vander<span className='highlighted'>Amazing</span>
					</Link>
					<Burger onClick={toggleNavHandler} />
					<ul
						className={`${classes['nav-list']} ${
							isNavOpen ? classes['nav-active'] : ''
						}`}
					>
						<li>
							<a href='#blog'>Blog</a>
						</li>
						<li>
							<a href='#'>Bestsellery</a>
						</li>
						<li>
							<a href='#'>Zespół</a>
						</li>
						<li>
							<a href='#'>Sklep</a>
						</li>
						<li>
							<Button variant={'primary'}>Zaloguj się</Button>
						</li>
						<li>
							<Button variant={'secondary'}>0.00zł</Button>
						</li>
						<ThemeSwitch />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default MainNavigation;
