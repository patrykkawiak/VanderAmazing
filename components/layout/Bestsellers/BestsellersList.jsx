import BestsellersItem from './BestsellersItem';

import classes from './BestsellersList.module.scss';

const dummy = [
	{
		id: 'b1',
		name: 'Steel Serie W550',
		price: '59.99zł',
		img: '/images/mouse.png',
	},
	{
		id: 'b2',
		name: 'Steel Serie W550',
		price: '59.99zł',
		img: '/images/headphones2.png',
	},
	{
		id: 'b3',
		name: 'Steel Serie W550',
		price: '59.99zł',
		img: '/images/mouse2.png',
	},
];

const BestsellersList = () => {
	return (
		<ul className={classes.list}>
			{dummy.map((item) => {
				return <BestsellersItem key={item.id} item={item} />;
			})}
		</ul>
	);
};
export default BestsellersList;
