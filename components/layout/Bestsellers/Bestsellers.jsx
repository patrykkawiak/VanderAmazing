import Heading from '@/components/utils/Heading/Heading';
import BestsellersList from './BestsellersList';

const Bestsellers = () => {
	return (
		<section className='wrapper section-padding'>
			<Heading title={'Bestsellery'} subtitle={'Popularne'} />
			<BestsellersList />
		</section>
	);
};
export default Bestsellers;
