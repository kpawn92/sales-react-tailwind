import { useContext } from 'react';
import { CartContex } from '../../context/ShoppingCartContext';
import { MdAddShoppingCart } from 'react-icons/md';

import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const CountCard = ({ id, name, nameProduct, price, description, url }) => {
	const { cart, setCart } = useContext(CartContex);

	const addToCart = () => {
		setCart(currItems => {
			const isItemsFound = currItems.find(item => item.id === id);
			if (isItemsFound) {
				return currItems.map(item => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else return item;
				});
			} else {
				return [
					...currItems,
					{ id, quantity: 1, price, name, nameProduct, description, url },
				];
			}
		});
	};

	const removeItem = id => {
		setCart(currItems => {
			if (currItems.find(item => item.id === id)?.quantity === 1) {
				return currItems.filter(item => item.id !== id);
			} else {
				return currItems.map(item => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const getQuantityById = id => {
		return cart.find(item => item.id === id)?.quantity || 0;
	};

	const quantityPerItem = getQuantityById(id);

	return (
		<>
			{quantityPerItem === 0 ? (
				<button
					onClick={() => addToCart()}
					className='flex flex-col justify-center items-center text-xl mb-2 py-4 shadow-md bg-yellow-200 rounded-md'
				>
					<MdAddShoppingCart className='text-4xl' />
				</button>
			) : (
				<div className='flex'>
					<button
						onClick={() => removeItem(id)}
						className='w-full flex justify-center bg-yellow-200 items-center text-xl mb-2 py-4 shadow-md rounded-md'
					>
						<FaMinusCircle className='text-3xl' />
					</button>
					<div className='flex justify-center items-center text-md py-2 active:bg-gray-600 active:text-white p-2'>
						<p className='font-bold bg-gray-900 text-gray-50 shadow-xl px-3 py-3 rounded-full'>
							{quantityPerItem}
						</p>
					</div>
					<button
						onClick={() => addToCart()}
						className='w-full flex flex-col justify-center bg-yellow-200 items-center text-xl mb-2 py-4 shadow-md rounded-md'
					>
						<FaPlusCircle className='text-3xl' />
					</button>
				</div>
			)}
		</>
	);
};

export default CountCard;
