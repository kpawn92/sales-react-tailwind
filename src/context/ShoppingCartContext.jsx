import { useState, createContext } from 'react';

export const CartContex = createContext(null);

const ShoppingCartContext = ({ children }) => {
	const [cart, setCart] = useState([]);
	return (
		<CartContex.Provider value={{ cart, setCart }}>
			{children}
		</CartContex.Provider>
	);
};

export default ShoppingCartContext;
