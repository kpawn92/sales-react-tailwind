import Cards from '../components/content/Cards';
import products from '../api/products.json';

const FoodsPage = () => {
	const alimentos = products.filter(item => item.category === 'alimentos');
	return (
		<>
			<div className='bg-yellow-400'>
				<Cards items={alimentos} />
			</div>
		</>
	);
};

export default FoodsPage;
