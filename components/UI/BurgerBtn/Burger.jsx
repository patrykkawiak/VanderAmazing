import classes from './Burger.module.scss';
const Burger = ({ onClick }) => {
	return (
		<button onClick={onClick} className={classes.burger}>
			<div className={classes['burger-bar']}></div>
			<div className={classes['burger-bar']}></div>
			<div className={classes['burger-bar']}></div>
		</button>
	);
};

export default Burger;
