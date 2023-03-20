import { useContext, useState, useEffect, Suspense, lazy } from 'react';
import { CartContex } from '../context/ShoppingCartContext';
const Img = lazy(() => import('../components/content/Img'));

const CartPage = () => {
	const { cart } = useContext(CartContex);
	// console.log(cart);
	const [total, setTotal] = useState(null);

	useEffect(() => {
		if (cart.length > 0)
			setTotal(
				cart
					.map(item => parseFloat(item.price * item.quantity))
					.reduce((acc, curr) => acc + curr, 0)
					.toFixed(2)
			);
	}, []);

	const handleCheck = () => {
		let stringData = '';

		cart.map(
			item =>
				(stringData += `(${item.quantity} x ${item.name} - ${
					item.nameProduct
				} $${(parseFloat(item.price) * item.quantity).toFixed(2)} USD), `)
		);

		// console.log('$' + total + ' USD ' + stringData);

		window.open(
			`https://api.whatsapp.com/send?phone=5351086567&text=${
				'$' + total + ' USD ' + stringData
			}`
		);
	};
	return (
		<div>
			{cart.length > 0 && (
				<>
					<div className='text-lg'>
						<h3 className='text-2xl font-bold'>Productos</h3>
						<div className='font-semibold'>Total: ${total} USD</div>
						{cart.map(({ id, name, quantity, description, price, url }) => (
							<div
								key={id}
								className='border rounded-lg my-2 px-2 py-2 bg-gray-100'
							>
								<Suspense
									fallback={
										<h4 className='text-base font-medium text-center'>
											Loading...
										</h4>
									}
								>
									<Img url={url} name={name} />
								</Suspense>

								<div>
									<div>Marca: {name}</div>
									<div>Cantidad: {quantity}</div>
									<div>Descripci&oacute;n: {description}</div>
									<div>${price}</div>
									<div>Total: ${(parseFloat(price) * quantity).toFixed(2)}</div>
								</div>
							</div>
						))}
					</div>
					<button
						className='border px-4 py-3 rounded-lg w-full flex justify-center items-center bg-gray-900'
						onClick={handleCheck}
					>
						<p className='mr-1 text-gray-50 font-bold'>Enviar pedido</p>
						<img src='/assets/logo/ws.png' alt='checkout' width={40} />
					</button>
				</>
			)}
		</div>
	);
};

export default CartPage;
