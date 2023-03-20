import { useState, createContext } from 'react';

export const CartContex = createContext(null);

const ShoppingCartContext = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [open, setOpen] = useState(false);
	return (
		<CartContex.Provider value={{ cart, setCart, open, setOpen }}>
			{children}
		</CartContex.Provider>
	);
};

export default ShoppingCartContext;
