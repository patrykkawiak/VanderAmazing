import Advantages from '@/components/layout/Advantages/Advantages';
import Bestsellers from '@/components/layout/Bestsellers/Bestsellers';
import Blog from '@/components/layout/Blog/Blog';
import Header from '@/components/layout/Header/Header';
import Members from '@/components/layout/Members/Members';
import Stats from '@/components/layout/Stats/Stats';
import Team from '@/components/layout/Team/Team';

const HomePage = () => {
	return (
		<>
			<Header />
			<Blog />
			<Bestsellers />
			<Advantages />
			<Stats />
			<Team />
			<Members />
		</>
	);
};

export default HomePage;
