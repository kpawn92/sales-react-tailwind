import { useContext } from 'react';
import { CartContex } from '../context/ShoppingCartContext';
import { TbArrowUpCircle } from 'react-icons/tb';

const HomePage = () => {
	const { open, setOpen } = useContext(CartContex);
	return (
		<div className='h-screen'>
			<div className='flex justify-center flex-col'>
				<div className='flex justify-center'>
					<img src='/assets/logo/logoA_L.png' alt='' width={200} />
				</div>{' '}
				<p className='calidad text-justify'>Calidad!</p>
				<p className='rapidez text-justify'>Rapidez!</p>
				<p className='text text-justify'>A la velocidad de un click!</p>
				<button
					className='lg:hidden md:hidden border bg-gray-900 text-yellow-400 mt-10 p-2 m-3 rounded-sm shadow-md font-bold uppercase'
					onClick={() => setOpen(!open)}
				>
					{open ? (
						<div className='flex justify-center items-center'>
							<p className='mr-2'>Seleccionar categoria</p>
							<TbArrowUpCircle className='animate-bounce ml-1 duration-300 text-xl' />
						</div>
					) : (
						'Comenzar'
					)}
				</button>
			</div>
		</div>
	);
};

export default HomePage;
