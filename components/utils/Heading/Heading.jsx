const Heading = ({ subtitle, title }) => {
	return (
		<div className="section-heading">
			<small>{subtitle}</small>
			<h2>{title}</h2>
		</div>
	);
};

export default Heading;
