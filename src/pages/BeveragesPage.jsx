import Cards from '../components/content/Cards';
import products from '../api/products.json';

const BeveragesPage = () => {
	const beverages = products.filter(item => item.category === 'bebidas');
	return (
		<>
			<div className='bg-yellow-400'>
				<Cards items={beverages} />
			</div>
		</>
	);
};

export default BeveragesPage;
