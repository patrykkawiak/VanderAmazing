import classes from './HotShot.module.scss';

const HotShot = () => {
	return (
		<div className={classes.hotshot}>
			<h3>Gorący Strzał</h3>
			<div className={classes['hotshot-ctn']}>
				<div className={classes['hotshot-item']}>
					<div>02</div>
					<p>godz.</p>
				</div>
				<div className={classes['hotshot-item']}>
					<div>02</div>
					<p>min.</p>
				</div>
				<div className={classes['hotshot-item']}>
					<div>02</div>
					<p>sek.</p>
				</div>
			</div>
		</div>
	);
};
export default HotShot;
