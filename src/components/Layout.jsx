import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className='bg-yellow-400 w-full'>
				<div className='pt-40 px-7 py-7'>{children}</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
