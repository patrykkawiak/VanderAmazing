import Image from 'next/image';

import classes from './Member.module.scss';

const Member = ({ member }) => {
	const { name, id, vacancy, desc, img } = member;
	return (
		<li className={classes.member}>
			<Image src={img} alt={name} height={500} width={250} />
			<article className={classes['member-ctn']}>
				<h3>{name}</h3>
				<small className='highlighted'>{vacancy}</small>
				<p>{desc}</p>
			</article>
		</li>
	);
};

export default Member;
