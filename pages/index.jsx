import Advantages from '@/components/layout/Advantages/Advantages';
import Bestsellers from '@/components/layout/Bestsellers/Bestsellers';
import Blog from '@/components/layout/Blog/Blog';
import Header from '@/components/layout/Header/Header';

const HomePage = () => {
	return (
		<>
			<Header />
			<Blog />
			<Bestsellers />
			<Advantages />
		</>
	);
};

export default HomePage;
