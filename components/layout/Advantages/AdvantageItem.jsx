import Image from 'next/image';

import classes from './AdvantageItem.module.scss';

const AdvantageItem = (props) => {
	const { title, desc } = props.adv;

	return (
		<li className={classes.item}>
			<Image
				src={'/images/wallet.png'}
				alt='wallet icon'
				width={80}
				height={80}
			/>
			<h3>{title}</h3>
			<p>{desc}</p>
		</li>
	);
};

export default AdvantageItem;
