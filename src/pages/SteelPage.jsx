import Cards from '../components/content/Cards';
import products from '../api/products.json';

const SteelPage = () => {
	const aceo = products.filter(item => item.category === 'aceo');
	return (
		<>
			<div className='bg-yellow-400'>
				<Cards items={aceo} />
			</div>
		</>
	);
};

export default SteelPage;
