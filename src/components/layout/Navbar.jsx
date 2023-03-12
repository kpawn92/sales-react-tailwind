import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import { CartContex } from '../../context/ShoppingCartContext';

const Navbar = () => {
	const { cart } = useContext(CartContex);

	const quantity = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);
	const Links = [
		{ name: 'home', route: '/' },
		{ name: 'alimentos', route: '/foods' },
		{ name: 'bebidas', route: '/beverages' },
		{ name: 'higiene personal', route: '/steel' },
	];
	const styleOpen = { top: '5rem', opacity: '1' };
	const styleClose = { top: '-490px' };

	const [open, setOpen] = useState(false);
	return (
		<div className='shadow-md w-full fixed top-0 left-0'>
			<div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
				<div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
					<NavLink
						to={'/cart'}
						className='text-3xl text-yellow-500 mr-1 pt-2 relative inline-flex items-center'
					>
						<FaOpencart className='text-5xl' />
						{quantity > 0 && (
							<div className='absolute inline-flex items-center justify-center w-6 h-6 py-4 px-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900'>
								<span className='text-lg'>{quantity}</span>
							</div>
						)}
					</NavLink>
					<p className='ml-2'>Ventas online</p>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'
				>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>
				<ul
					style={open ? styleOpen : styleClose}
					className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:opacity-100 opacity-0'
				>
					{Links.map(({ name, route }, i) => (
						<li key={i} className='uppercase md:ml-8 text-xl md:my-0 my-7'>
							<NavLink
								onClick={() => setOpen(!open)}
								to={route}
								className='text-gray-100 hover:text-gray-400 duration-500'
							>
								{name}
							</NavLink>
						</li>
					))}
					<li className='uppercase md:ml-8 text-xl md:my-0 my-7 py-4'>
						<NavLink
							onClick={() => setOpen(!open)}
							to='/cart'
							className='flex text-gray-100 hover:text-gray-400 duration-500'
						>
							<p>cart</p>
							<small className='slashed-zero text-xl border bg-yellow-400 rounded-full mx-2 px-2 text-black'>
								{quantity}
							</small>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
