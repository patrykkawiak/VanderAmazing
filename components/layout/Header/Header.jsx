import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import classes from './Header.module.scss';
import HotShot from '../../utils/HotShot/HotShot';

const Header = () => {
	return (
		<header className={`wrapper ${classes.header}`}>
			<Image
				src={'/images/header-image.png'}
				className={classes['header-img']}
				width={500}
				height={500}
				alt='header img'
				priority={true}
			/>

			<div className={classes['header-content']}>
				<h1 className={classes['header-content-heading']}>
					Wejdź na wyższy <br />
					<div
						className={`${classes['header-content-highlighted']} highlighted`}
					>
						Level!
					</div>
				</h1>
				<p className={`${classes['header-content-text']} text-gray`}>
					Sprawdź nasze promocje oraz bestsellery! Posiadamy największy sklep
					internetowy w polsce, nie zwlekaj zobacz nasze oferty nie zwlekaj
					zobacz nasze oferty
				</p>
				<div className={classes['header-content-btns']}>
					<Button variant={'primary'}>
						<p className='text-[1.5rem]'>Sklep</p>
					</Button>
					<Button variant={'secondary'}>
						<p className='text-[1.5rem]'>Bestsellery</p>
					</Button>
				</div>
			</div>
			<HotShot />
		</header>
	);
};
export default Header;
