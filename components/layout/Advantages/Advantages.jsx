import AdvantageItem from './AdvantageItem';
import classes from './Advantages.module.scss';

const advantages = [
	{
		id: 'a1',
		title: 'Ceny',
		desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
	},
	{
		id: 'a2',
		title: 'Ceny',
		desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
	},
	{
		id: 'a3',
		title: 'Ceny',
		desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
	},
	{
		id: 'a4',
		title: 'Ceny',
		desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
	},
	{
		id: 'a5',
		title: 'Ceny',
		desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
	},
	{
		id: 'a6',
		title: 'Ceny',
		desc: 'Jesteśmy konkurencja dla reszty firm z branży IT',
	},
];

const Advantages = (params) => {
	return (
		<section className={`${classes.advantages}`}>
			<div className={classes['advantages-shadow']}></div>
			<div className='wrapper section-padding'>
				<div className={classes['advantages-heading']}>
					<small>Co nas wyróżnia?</small>
					<h2>Nasze zalety</h2>
				</div>
				<ul className={classes['advantages-list']}>
					{advantages.map((adv) => {
						return <AdvantageItem adv={adv} />;
					})}
				</ul>
			</div>
		</section>
	);
};

export default Advantages;
