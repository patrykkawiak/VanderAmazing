import Button from '@/components/UI/Button/Button';
import Image from 'next/image';

import classes from './BestsellersItem.module.scss';

const BestsellersItem = (props) => {
	const { img, price, id, name } = props.item;
	return (
		<li className={classes.item}>
			<div className={classes['item-imgs']}>
				<Image
					src={'/images/elipse2.png'}
					alt='elipse'
					width={550}
					height={550}
					className={classes['item-elipse']}
				/>
				<Image
					src={img}
					width={200}
					height={500}
					alt={name}
					className={classes['item-img']}
				/>
			</div>
			<div className={classes['item-content']}>
				<p className={classes['item-content-price']}>{price}</p>
				<p className='text-gray text-2xl'>{name}</p>
				<Button variant={'secondary'}>Do koszyka</Button>
			</div>
		</li>
	);
};

export default BestsellersItem;
