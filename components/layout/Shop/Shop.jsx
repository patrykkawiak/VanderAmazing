import Button from '@/components/UI/Button/Button';
import classes from './Shop.module.scss';
import Link from 'next/link';

const Shop = () => {
	return (
		<section className={classes.shop}>
			<div className={classes['shop-box']}>
				<h2>Sklep</h2>
				<p>Najlepsze zestawy dla graczy</p>
				<div>
					<Button variant={'secondary'}>
						<Link href={'/shop'}>Sprawdź produkty</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Shop;
