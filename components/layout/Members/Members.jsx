import Heading from '@/components/utils/Heading/Heading';
import classes from './Members.module.scss';

const Members = () => {
	return (
		<section className={`wrapper section-padding ${classes.members}`}>
			<Heading title={'Personel'} subtitle={'Kim jesteśmy?'} />
		</section>
	);
};

export default Members;
