import Image from 'next/image';
import classes from './Stats.module.scss';

const Stats = () => {
	return (
		<section className={`wrapper section-padding ${classes.stats}`}>
			<Image
				src={'/images/amico.png'}
				height={500}
				width={500}
				alt='random image ilustrate our stats'
				className={classes['stats-img']}
			/>
			<div className={classes['stats-content']}>
				<h2>Dlaczego nasze produkty są najlepsze na rynku?</h2>
				<p>
					Każda nawet pojedyncza rzecz ma swój wpływ na finalny produkt, np:
				</p>
				<ul>
					<li>Najnowszego oprogwamowania</li>
					<li>Aktualizacji</li>
					<li>Wsparcia</li>
					<li>Kompetentego teamu</li>
					<li>Wspołpac z innymi firmami</li>
				</ul>
			</div>
		</section>
	);
};
export default Stats;
