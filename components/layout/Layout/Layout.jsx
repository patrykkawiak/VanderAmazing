import Footer from '../Footer/Footer';
import MainNavigation from '../MainNavigation/MainNavigation';

const Layout = ({ children }) => {
	return (
		<>
			<MainNavigation />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
