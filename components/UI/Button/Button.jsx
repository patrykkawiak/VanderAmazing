import classes from './Button.module.scss';

const Button = ({ children, variant }) => {
	return (
		<button className={`${classes.btn} ${classes[`btn-${variant}`]}`}>
			{children}
		</button>
	);
};
export default Button;
